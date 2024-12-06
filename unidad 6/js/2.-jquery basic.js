//a JQuery statement tipically starts with a $ and ends with semicolon

$(document).ready(function(){   //as soon as document is ready to manipulate
    $("button").click(function(){
        //regular JavaScript can be used mixed with JQuery
        setTimeout(()=>{
            $("article:first-of-type p").text("hola mundo");
        },3000);
    });
});

/*Shorthand notation
$(function(){
    $("p").text("hola mundo");
});
*/

//////////////////////////
////selecting elements////
//////////////////////////
//JQuery creates these styles as inline. 
//Be carefull as inline style prevail over css files
$(()=>{
    //by id
    $("#a2p2").css("background-color", "lightyellow");

    //by class
    $(".destacado").css("font-size", "1.25rem");

    //by name
    $("body").css("background-color", "lightblue");
    $("body").css("width", "60vw");
    $("body").css("margin", "0 auto");
/*    $('article').css("border", "1px solid black");
    $('article').css("width", "80%");*/

    //by attribute
    $('a[href*="duck"]').css("text-decoration", "none");

    //by using CSS selectors
    $('#changing p:nth-last-child(2)').css("background-color", "lightcoral");
/*    $('#changing p:nth-of-type(even)').css("background-color", "lightcoral");
    $('#changing p:nth-of-type(odd)').css("background-color", "lightgreen");
    $('#changing p:not(.grande)').css("min-height", "50px");*/

    //by using JQuery custom selector
    $("#changing p:last").text("This text has changed by using JQuery custom selector :last. Another custom selectors are: :first, :even, :odd, :text, :password and :allowed");
    // all input elements with type text inside a form. Also :password and :submit are allowed
//    $("form :text").css("border", "1px solid black");

/*    $("#cambia-texto").click(()=>{
        $("#changing p:last").text("este es el último párrafo");
        $("#changing p:first").text("este es el primer párrafo");
    });*/

    
});
 
//////////////
////events////
//////////////

//mouse events

$(()=>{

    $("#mouse").click(()=>{
        $("#texto-eventos-raton").text("click event triggered");
    });

    $("#mouse").hover(()=>{
        $("#texto-eventos-raton").text("hover event triggered");
    });

    $("#mouse").mouseleave(()=>{
        $("#texto-eventos-raton").text("mouseleave event triggered");
    });

    $("#mouse").dblclick(()=>{
        $("#texto-eventos-raton").text("double click event triggered");
    });

    $("#cambia-texto").click(()=>{
        $("p").text("nuevo texto");
    });

    $("#cambia-color").click(()=>{
        //$("article:even").css("background-color", "lightpink");
        $("article:even").addClass("fondo-rosita");
        //$("article:odd").css("background-color", "lightyellow");
        $("article:odd").addClass("fondo-amarillito");
    });    

    //hover can be seen as a combination of mouseenter and mouseleave
    $("#hover").hover(function(){
        $(this).addClass("destacado1");
    }, function(){
        $(this).removeClass("destacado1");
    });

});

//keyboard events
$(()=>{
    var i = 0;
    $('input[name="keyboard"]').keypress(function(){
        $("#keypressed").text("Keypressed:"+(i += 1));
    });

    var j = 0;
    $('input[name="keyboard"]').keyup(function(){
        $("#keyup").text("Keyup:"+(j += 1));
    });

    var k = 0;
    $('input[name="keyboard"]').keydown(function(){
        $("#keydown").text("Keydown:"+(k += 1));
    });

    //keypress is similar to keydown, but modifier and non-printing keys such as Shift, Esc, Backspace or Delete, Arrow keys etc. trigger keydown events but not keypress events.
});

//form events
$(()=>{
    $('select').change(function(){
/*        let ciudad=$(this).find(":selected").val();
        $('#texto-form').text("You have selected "+ciudad)*/
        $('#texto-form').text("You have changed your selection);
    });

    $('input').focus(function(){
        $(this).addClass("destacado1");
    });

    $('input').blur(function(){
        $(this).removeClass("destacado1");
    });

    //a form can be submitted by using a submit button or by pressing enter when certain form elements have focus
    $("form").submit(function(event){
        event.preventDefault();
        $('#texto-form').text("You have submitted the form");
    });
});

//Document/window events
//ready event has been used since the very first sentence
$(document).ready(function(){
//    $("p").text("The DOM is now loaded and can be manipulated.");
    console.log("The DOM is now loaded and can be manipulated.");
});

//it can be summarized by using $(()=>{ bla bla });

$(()=>{
    $(window).scroll(function() {
        $("p#pixeles-desplazamiento").removeClass("oculto");
        $("p#pixeles-desplazamiento").text("event window.scroll "+window.scrollY + 'px');
    });
});


