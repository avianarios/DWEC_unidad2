////////////////////////////////
////throwing standard errors////
////////////////////////////////
//example 1
try{
    funcionInexistente();
}catch(err){
    console.error(err.name, err.message, err.stack);
}

//example 2
let JSONMalFormado='{"nombre":"perico","edad"}';
try{
    //let JSON.stringify(objetoMalFormado);
    let persona=JSON.parse(JSONMalFormado);
}catch(err){
    console.error(err.name, err.message, err.stack);
}


///////////////////////////////
////throwing our own errors////
///////////////////////////////
let JSON_usuario='{"nombre":"perico"}';
try{
    let usuario=JSON.parse(JSON_usuario);       //should I use "address" field, an error would occurred
    if (!usuario.direccion) {
        throw new SyntaxError("No tengo la dirección");
      }
}catch(err){
    console.error(err.message);
}

//////////////////
////rethrowing////
//////////////////
//if an unexpected error rises up, catch can rethrow an error

let num =prompt("insert a number greater than 30 but less than 40")
try { 
    if(isNaN(num)) throw "Not a number!" 
    else if (num>40) throw "Did you even read the instructions?, less than 40"
        else if (num <= 30) throw "Greater than 30" 
}catch(err){
    console.error(err);
}


////////////////////
////finally////
////////////////////

try{
    funcion_inexistente();
}catch (err){
    console.error(err.name, err.message);
}finally{
    console.log("esto se llama siempre, pase lo que pase");
}


////////////////////////////
////global error catcher////
////////////////////////////
window.addEventListener('error', (message, url, line, col, error)=>{
    console.error(`${message}\n At ${line}:${col} of ${url}`);
});


////////////////////////////////
////Creating personal errors////
////////////////////////////////

function manejadorError(error){
    console.error(error.cod, error.mensaje);
}

try{
    funcion_erronea();
}catch (err){
    throw new manejadorError({cod:1, mensaje:"error personalizado", error:err})
}