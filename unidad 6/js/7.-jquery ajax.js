$(()=>{
    let urlLocal=encodeURI("4.-jquery effects.html");
    urlLocal+=" #animations";
    let urlRemota1="https://fakestoreapi.com/products/";

    $("#ajax").click((evento)=>{
        switch (evento.target.id){
            case "btn-loadFragment":
                $("#contenido").load(urlLocal, function(respuesta, estado, XMLH){
//                    if (estado=="success"){
                        console.log("Server response:"+ estado, XMLH.status, XMLH.statusText);
                        //XMLH contains the whole server response, even the resource
//                    }
                });
                break;
            case "btn-get":

              /*how to send values to the server with get method with second optional parameter
                let valor=33;
                $.get(url, {number: valor}, function(data){
                    whatever
                }*/
                
                $.get(urlRemota1, function(data, estado, XMLH){
                    console.log("Server response: "+estado, XMLH.status, XMLH.statusText);
//                    console.log(data);
                    data.forEach(element => {
                        console.log (element.id, element.title, element.price);
                    }, "json");
                });
                break;
            case "btn-post":
                //this API allows to send information by using POST method
                let prod={
                        title: 'test product',
                        price: 13.5,
                        description: 'lorem ipsum set',
                        image: 'https://i.pravatar.cc',
                        category: 'electronic'
                };
                let producto=($.param(prod));       //equivalent to JS JSON.stringify
                

                $.post(urlRemota1, producto, function(data, estado, XMLH){
                    console.log("Server response: "+estado, XMLH.status, XMLH.statusText);
                    console.log(data);
                });

                break;

            case "btn-getJSON":
                $.getJSON(urlRemota1, function (data){
//                    console.log(data);
                    data.forEach(element=>{
                        console.log(element);
                    });
                });
            break;
        }
    });
});