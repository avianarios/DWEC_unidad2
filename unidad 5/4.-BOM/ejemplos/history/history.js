function cargarPagina(pagina) {
    let contenido = document.getElementById("contenido");

    // Cambiar contenido sin recargar la página
    if (pagina === "inicio") {
        contenido.innerHTML = "<h2>Página de Inicio</h2><p>Bienvenido a nuestra web.</p>";
    } else if (pagina === "nosotros") {
        contenido.innerHTML = "<h2>Sobre Nosotros</h2><p>Somos una empresa de tecnología.</p>";
    } else if (pagina === "contacto") {
        contenido.innerHTML = "<h2>Contacto</h2><p>Envíanos un mensaje.</p>";
    }

    // evitar agregar una nueva entrada al historial si la página que intentas cargar es la misma que la última página registrada en el historial porque se pinche varias veces en la misma página o porque se pinche "atrás"
    if (history.state?.pagina !== pagina) {
        history.pushState({ pagina }, pagina, "?pagina=" + pagina);
    }
}


//popstate is triggered when the navigator history changes, when user clicks back or forward, or when history.pushState() or history.replaceState() is called
//popstate is a different event that has some useful properties like state (state associated with history by using pushState or replaceState)
//window.onpopstate = (event) => {
    window.addEventListener('popstate', (evento) => {
    if (evento.state) {
        cargarPagina(evento.state.pagina);
    }
});

// Manejar clics en los botones del menú
document.querySelector("nav").addEventListener("click", (evento) => {
    if (evento.target.tagName === "BUTTON") {
        cargarPagina(evento.target.id);
    }
});

// Cargar la página inicial basada en la URL actual
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pagina = urlParams.get('pagina') || 'inicio';
    cargarPagina(pagina);
});