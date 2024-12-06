$(()=>{
    $("#parents").click((evento)=>{
        switch (evento.target.id){
            case "btn-getParent":
                console.log ($(evento.target).parent());
                break;
            case "btn-getParents":
                console.log ($(evento.target).parents());
                break;
            case "btn-setParent":
                $(evento.target).parent().addClass("borde-rojo");
                break;
            case "btn-setParents":
                $(evento.target).parents().addClass("borde-rojo");
                break;
            case "btn-getParentsUntil":
                console.log ($(evento.target).parentsUntil("body"));
                break;
            case "btn-setParentsUntil":
                $(evento.target).parentsUntil("body").addClass("borde-rojo");
                break;
        }
    });

    $("#descendants").click((evento)=>{
        switch (evento.target.id){
            case "btn-getChildren":
                console.log ($(evento.target).children().prevObject[0]);
                break;
            case "btn-setChildren":
                //$(evento.target).children().addClass("highlight");
                $("#descendants > ul").children().addClass("borde-rojo");
                break;
            case "btn-find":
                $("#descendants > ul").find("li").addClass("borde-rojo");
                break;
            case "btn-findAll":
                $("#descendants >ul").find("*").addClass("borde-rojo");
                break;
        }
    });             


    $("#siblings").click((evento)=>{
        switch (evento.target.id){
            case "btn-setSiblings":
                $(evento.target).siblings().addClass("borde-rojo");
                break;
            case "btn-setNextSibling":
                $("#siblings p:first").next().addClass("borde-rojo");
                break;
            case "btn-nextAll":
                $("#siblings p:first").nextAll().addClass("borde-rojo");
                break;
            case "btn-nextUntil":
                $("#siblings h3").nextUntil("ul").addClass("borde-rojo");
                break;
            case "btn-prev":
                $("#siblings ul").prev().addClass("borde-rojo");
                break;
            case "btn-prevAll":
                $("#siblings ul").prevAll().addClass("borde-rojo");
                break;
            case "btn-prevUntil":
                $("#siblings ul").prevUntil("h3").addClass("borde-rojo");
                break;
        }
    });             

});