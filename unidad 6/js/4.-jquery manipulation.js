$(()=>{
//    $("#text button:first").click(()=>{


///////////////////////////
////getters and setters////
///////////////////////////
//val method
    $("input").keyup(function(){
        $('#texto-form').text("input:"+$(this).val());

    });

    $("select").change(function(){
        let ciudad=$(this).find(":selected").val();
        $('#texto-form').text("You have selected "+ciudad)
    });

    $("form").submit(function(event){
        event.preventDefault();
    });

    $("#getters-setters").click((evento)=>{
        switch(evento.target.id){
            case "btn-getText":
                console.log ($("#text > p:first").text());
                break;
            case "btn-getAllText":
                console.log ($("#text > p").text());
                break;
            case "btn-setText":
                $("#text > p:first").text("<strong>Las etiquetas HTML no son interpretadas</strong>");
                break;
            case "btn-setAllText":
                $("#text > p").text("<strong>Este método</strong> no interpreta las etiquetas HTML");
                break;
            case "btn-getHTML":
                console.log ($("#HTML > p:first").html());
                break;
            case "btn-getAllHTML":
                console.log ($("#HTML > p").html());
                break;
            case "btn-setHTML":
                $("#HTML > p:first").html("<strong>Las etiquetas HTML SÍ son interpretadas</strong>");
                break;
            case "btn-setAllHTML":
                $("#HTML > p").html("<strong>Este método</strong> SÍ interpreta las etiquetas HTML");
                break;
            case "btn-getImgattr":
                console.log ($("#attr img").attr("alt"));
                break;
            case "btn-getLinkattr":
                console.log ($("#attr a").attr("href"));
                break;
            case "btn-setImgattr":
                $("#attr img").attr("alt", "una imagen aleatoria de un gato");
                break;
            case "btn-setLinkattr":
                $("#attr a").text("The cat API");
                $("#attr a").attr("href", "https://thecatapi.com/");                
                break;
            case "btn-submit":
                let regex = /^[a-zA-Z]+$/;
                let currentValue = $('form input[name="nombre"]').val();
        
                if(regex.test(currentValue) == false){
                    $("#texto-form").html('<p class="destacado1">Name field not valid!</p>');
                    /*in order for show to work display:none must be set at the original element
                    $("#texto-form").html('<p class="destacado1">Name field not valid!</p>').show().fadeOut(2000);*/
                }else{
                    $("#texto-form").html('');
                }
                break;
            case "btn-fill":
                $('form input[name="nombre"]').val("Procopio");
                $('form input[name="apellidos"]').val("Máximo Meridio");
                break;
        }
    });

    
    $("#insert-content").click((evento)=>{
        switch(evento.target.id){
            case "btn-append":
                $("#append-prepend > p").append("<strong> Paragraph appended with JQuery </strong>");
                break;
            case "btn-append-multiple":
                $("#append-prepend > p").append("<strong> Paragraph <span class='destacado1'>number 1 appended</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 appended</span> with JQuery </strong>");
                break;
            case "btn-prepend":
                $("#append-prepend > p").prepend("<strong> Paragraph prepended with JQuery </strong>");
                break;
            case "btn-prepend-multiple":
                $("#append-prepend > p").prepend("<strong> Paragraph <span class='destacado1'>number 1 prepended</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 prepended</span> with JQuery </strong>");
                break;
            case "btn-before":
                $("#before-after > p").before("<strong> Paragraph inserted before with JQuery </strong>");
                break;
            case "btn-before-multiple":
                $("#before-after > p").before("<strong> Paragraph <span class='destacado1'>number 1 inserted before</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 inserted before</span> with JQuery </strong>");
                break;
            case "btn-after":
                $("#before-after > p").after("<strong> Paragraph inserted after with JQuery </strong>");
                break;
            case "btn-after-multiple":
                $("#before-after > p").after("<strong> Paragraph <span class='destacado1'>number 1 inserted after</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 inserted after</span> with JQuery </strong>");
                break;
            case "btn-wrap":
                $("#wrap>p").wrap("<div class='destacado1'></div>");
                break;
        }
    });


    $("#remove-content").click((evento)=>{
        switch(evento.target.id){
            case "btn-empty":
                $("#empty-remove").empty();
                break;
            case "btn-remove":
                $("#empty-remove").remove();
                break;
            case "btn-unwrap":
                $("#unwrap p").unwrap();
                break;
            case "btn-removeAttr":
                $("#removeAttr > a").removeAttr("href");
                break;
        }
    });

    $("#appearance").click((evento)=>{
        switch(evento.target.id){
            case "btn-addClass":
                $("#adclass-removeclass-toggleclass > p").addClass("destacado1 texto-grande");
                break;
            case "btn-removeClass":
                $("#adclass-removeclass-toggleclass > p").removeClass("destacado1 texto-grande");
                break;
            case "btn-toggleClass":
                $("#adclass-removeclass-toggleclass > p").toggleClass("destacado1 texto-grande");
                break;
            case "btn-css1":
                $("#css > p").css("color", "lightcoral");
                break;
            case "btn-css2":
                $("#css > p").css("font-size", "1.25rem");
                break;
            case "btn-css3":
                $("#css > p").css({"color":"lightcoral", "font-size":"1.25rem"});
                break;
        }
    });


    $("#dimensions").click((evento)=>{
        switch (evento.target.id){
            case "btn-getwidth":
//                console.log ($(this).width());  //this references viewport
                console.log ($("#width-height").width());
                break;
            case "btn-setwidth":
                $("#width-height").width(500);
                break;
            case "btn-getheight":
                console.log ($("#width-height").height());  //this references viewport
                break;
            case "btn-setheight":
                $("#width-height").height(500);
                break;
            case "btn-getinnerwidth":
                console.log ($("#innerWidth-innerHeight").innerWidth());
                break;
            case "btn-setinnerwidth":
                $("#innerWidth-innerHeight").innerWidth(500);
                break;
            case "btn-getinnerheight":
                console.log ($("#innerWidth-innerHeight").innerHeight());
                break;
            case "btn-setinnerheight":
                $("#innerWidth-innerHeight").innerHeight(500);
                break;

            case "btn-getouterwidth":
                console.log ($("#outerWidth-outerHeight").outerWidth());
                break;
            case "btn-setouterwidth":
                $("#outerWidth-outerHeight").outerWidth(500);
                break;
            case "btn-getouterheight":
                console.log ($("#outerWidth-outerHeight").outerHeight());
                break;
            case "btn-setouterheight":
                $("#outerWidth-outerHeight").outerHeight(500);
                break;                

        }
    });
});



//this is plain JavaScript. Later on, we'll learn how to do it with JQuery
const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".container");
window.addEventListener("load", getRandomCats);

randomCatPhoto = (json) => {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;
  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(url);
    const json = await response.json();
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error:"+e);
  }
}