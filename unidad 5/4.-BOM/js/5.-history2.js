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

    // Cambiar la URL sin recargar
    history.pushState({ pagina }, pagina, "?pagina=" + pagina);
}

// Manejar cambios en la URL (por ejemplo, si el usuario usa el botón "atrás")



//is popstate triggered when the navigator history changes either when user clicks back or forward or when history.pushState() or history.replaceState() is called
//        window.onpopstate = (event) => {
window.addEventListener('popstate', (event) => {
if (event.state) {
    cargarPagina(event.state.pagina);
}
});