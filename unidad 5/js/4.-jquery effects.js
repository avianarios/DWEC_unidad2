///////////////
////effects////
///////////////

//show and hide
//hide set the inline sytle display:none and show removes it
//A ms counter can be set and a callback function as well

$(()=>{
    /*$(".parrafos-show-hide-toggle > p:not(#texto-show-hide-toggle)").css("background-color", "lightyellow");
    $(".parrafos-show-hide-toggle > p:not(#texto-show-hide-toggle)").css("width", "100%");
    $(".parrafos-show-hide-toggle > p:not(#texto-show-hide-toggle)").css("height", "50px");
    $(".parrafos-toggle > p:not(#texto-toggle)").css("background-color", "lightyellow");
    $(".parrafos-toggle > p:not(#texto-toggle)").css("width", "100%");
    $(".parrafos-toggle > p:not(#texto-toggle)").css("height", "50px");*/

    $(".parrafos ").css("width", "100%");
    $(".parrafos > p").css("width", "100%");
    $(".parrafos > p").css("background-color", "lightyellow");
    $(".parrafos > p").css("height", "50px");

    //hide
    //fast=200ms and slow=50ms
    $("#hide-btn").click(()=>{
        $("#show-hide-toggle > .parrafos > p.very-slow").hide(2000, ()=>{
            $("p#texto-show-hide-toggle").show();
            $("p#texto-show-hide-toggle").text("paragraphs hided")
        });
        $("#show-hide-toggle > .parrafos > p.slow").hide("slow");
        $("#show-hide-toggle > .parrafos > p.normal").hide();
        $("#show-hide-toggle > .parrafos > p.fast").hide("fast");
        $("#show-hide-toggle > .parrafos > p.very-fast").hide(50);
    });
    
    // Show
    $("#show-btn").click(()=>{
        $("#show-hide-toggle > .parrafos > p.very-slow").show(2000)
        $("#show-hide-toggle > .parrafos> p.slow").show("slow");
        $("#show-hide-toggle > .parrafos > p.normal").show();
        $("#show-hide-toggle > .parrafos > p.fast").show("fast");
        $("#show-hide-toggle > .parrafos > p.very-fast").show(50, ()=>{
            $("p#texto-show-hide-toggle").hide();
        });
    });
  
    //toggle
    $("#toggle-btn").click(()=>{
        $("#show-hide-toggle > .parrafos > p.very-slow").toggle(2000, ()=>{
            $("p#texto-show-hide-toggle").toggle();
            $("p#texto-show-hide-toggle").text("paragraphs hided")
        });
        $("#show-hide-toggle > .parrafos > p.slow").toggle("slow");
        $("#show-hide-toggle > .parrafos > p.normal").toggle();
        $("#show-hide-toggle > .parrafos > p.fast").toggle("fast");
        $("#show-hide-toggle > .parrafos > p.very-fast").toggle(50);
    })

    //fadeIn
    $("#fadeIn-btn").click(()=>{
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.very-slow").fadeIn(2000, ()=>{
            $("p#texto-fadeIn-fadeOut-fadeToggle").fadeOut();
        });
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.slow").fadeIn("slow");
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.normal").fadeIn();
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.fast").fadeIn("fast");
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.very-fast").fadeIn(50);
    });

    //fadeOut
    $("#fadeOut-btn").click(()=>{
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.very-slow").fadeOut(2000, ()=>{
            $("p#texto-fadeIn-fadeOut-fadeToggle").fadeIn();
            $("p#texto-fadeIn-fadeOut-fadeToggle").text("paragraphs hided")
        });
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.slow").fadeOut("slow");
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.normal").fadeOut();
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.fast").fadeOut("fast");
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.very-fast").fadeOut(50);
    });

    //fadeToggle
    $("#fadeToggle-btn").click(()=>{
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.very-slow").fadeToggle(2000, ()=>{
            $("p#texto-fadeIn-fadeOut-fadeToggle").fadeToggle();
            $("p#texto-fadeIn-fadeOut-fadeToggle").text("paragraphs hided")
        });
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.slow").fadeToggle("slow");
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.normal").fadeToggle();
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.fast").fadeToggle("fast");
        $("#fadeIn-fadeOut-fadeToggle > .parrafos > p.very-fast").fadeToggle(50);
    });

    //fadeTo
    $("#fadeTo-btn").click(()=>{
        let opacidad=parseFloat($('[name="opacidad"]').val());

        $("#fadeTo > .parrafos > p.very-slow").fadeTo(2000, opacidad, ()=>{
            $("p#texto-fadeTo").fadeToggle();
            $("p#texto-fadeTo").text("paragraphs hided")
        });
        $("#fadeTo > .parrafos > p.slow").fadeTo("slow", opacidad);
        $("#fadeTo > .parrafos > p.normal").fadeTo(125, opacidad);
        $("#fadeTo > .parrafos > p.fast").fadeTo("fast",opacidad);
        $("#fadeTo > .parrafos > p.very-fast").fadeTo(50,opacidad);
    });

    //slideUp
    $("#slideUp-btn").click(()=>{
        $("#slideUp-slideDown-slideToggle > .parrafos > p.very-slow").slideUp(2000, ()=>{
            $("p#texto-slideUp-slideDown-slideToggle").fadeToggle();
            $("p#texto-slideUp-slideDown-slideToggle").text("paragraphs hided")
        });
        $("#slideUp-slideDown-slideToggle > .parrafos > p.slow").slideUp("slow");
        $("#slideUp-slideDown-slideToggle > .parrafos > p.normal").slideUp();
        $("#slideUp-slideDown-slideToggle > .parrafos > p.fast").slideUp("fast");
        $("#slideUp-slideDown-slideToggle > .parrafos > p.very-fast").slideUp(50);
    });

    //slideDown
    $("#slideDown-btn").click(()=>{
        $("#slideUp-slideDown-slideToggle > .parrafos > p.very-slow").slideDown(2000, ()=>{
            $("p#texto-slideUp-slideDown-slideToggle").fadeToggle();
        });
        $("#slideUp-slideDown-slideToggle > .parrafos > p.slow").slideDown("slow");
        $("#slideUp-slideDown-slideToggle > .parrafos > p.normal").slideDown();
        $("#slideUp-slideDown-slideToggle > .parrafos > p.fast").slideDown("fast");
        $("#slideUp-slideDown-slideToggle > .parrafos > p.very-fast").slideDown(50);
    });

    //slideToggle
    $("#slideToggle-btn").click(()=>{
        $("#slideUp-slideDown-slideToggle > .parrafos > p.very-slow").slideToggle(2000, ()=>{
            $("p#texto-slideUp-slideDown-slideToggle").slideToggle();
        });
        $("#slideUp-slideDown-slideToggle > .parrafos > p.slow").slideToggle("slow");
        $("#slideUp-slideDown-slideToggle > .parrafos > p.normal").slideToggle();
        $("#slideUp-slideDown-slideToggle > .parrafos > p.fast").slideToggle("fast");
        $("#slideUp-slideDown-slideToggle > .parrafos > p.very-fast").slideToggle(50);
    });       

});


//////////////////
////animations////
//////////////////
//elements must have relative, fixed, or absolute position to manipulate or animate its position
//optional parameters: delay and callback function


$(()=>{
    let delay=5000;
    $("#animation-move-right").click(function(){
        $("#animation-move-right").animate({
/*            left: function(){
                return $(this).parent().width();
            }*/
            left: 400
        },delay);   //delay is optional
    });

    $("#stop-move-right").click(()=>{
        $("#animation-move-right").stop();
    })


    $("#animation-multiple").click(function(){
        $("#animation-multiple").animate({
            width: "300px",
            height: "+=75px",   /*Relative value*/
            marginLeft: "400px",
            opacity: 0.5
        }, delay);
    });

    $("#stop-multiple-animation").click(()=>{
        $("#animation-multiple").stop();
    })

    $("#animation-multiple-step").click(function(){
        $("#animation-multiple-step")
            .animate({width: "400px"}, delay/2)
            .animate({marginLeft: "400px"}, delay/2)
            .animate({opacity: 0.5}, delay/2)
    });

    $("#stop-multiple-animation-step").click(()=>{
//        $("#animation-multiple-step").stop(true); //it stops all animations
//        $("#animation-multiple-step").stop(true, true); //it stops all animations but inmediately completes the stopped one
        $("#animation-multiple-step").stop();   //it stops only the current animation. If there are chained animations, it would only stops current one
    })

    $("#animation-toggle").click(function(){
        $("#animation-toggle").animate({
            width: "toggle"
        },delay, ()=>{
            console.log("animation completed")
        });
    });

    $("#stop-animation-toggle").click(()=>{
        $("#animation-toggle").stop();
    })
   
    $("#caja").click(()=>{
        $("#caja").stop().slideToggle(delay/2);     //When clicking it starts and, if it is clicked again, it stops and call slideToggle
    });

/* hover (f1,f2) --> f1=handlerin f2=handlerout
    $("#animation-hover").hover(function(){ 
        $(this).stop().fadeOut();
    },function(){
        $(this).stop().fadeIn();
    });*/

    $("#animation-hover").hover(function(){
        $(this).stop().fadeToggle();
    });

});