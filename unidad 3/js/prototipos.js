//////prototype///////
///////multiple prototypical inheritance/////
///////method overriding////////
//there is a hidden property [[prototype]] that indicates the object that inherits from
//it is set by using setPrototypeOf 
let animal={
    come: true,
    desplazate(){
        return "voy andando";
    }
};

let conejo={
    salta: true,
    desplazate(){
       return "voy saltando";
    }
};

let perro={
    ladra: true
};

let conejito={};

conejito.desplazate=()=>{return "voy dando saltitos"};  //overrides prototype's method
/*conejito.desplazate= function (){
    return "voy dando saltitos";
}*/

//Object.setPrototype (object, prototype)
Object.setPrototypeOf(conejo, animal);  //animal is the prototype of conejo. The latter inherits from the former
//conejo.__proto__=animal;    shorter, but outdated. 
Object.setPrototypeOf(perro, animal);
Object.setPrototypeOf(conejito, conejo);

console.log(conejo.come, perro.come, conejito.come);
console.log (perro.desplazate(), conejo.desplazate());

//example 2


///////////iterating through objects///////////
let persona={
    nombre:"";
    apellidos:"";
}

let administrador={
    administrador:"true";
}

Object.setPrototypeOf(administrador,persona);
administrador.nombre="perico";
administrador.apellidos="de los palotes";
for (let propiedad in administrador){
  console.log (propiedad+":"+administrador[propiedad]);
}
//iterate through the non-inherited properties
//A distinction between local and inherited properties can be made BEFORE assigning a value to the former
for (let propiedad in administrador){
    let propio=administrador.hasOwnProperty(propiedad)
    if (propio){
      console.log (propiedad+":"+administrador[propiedad]);
    }else{
      console.log (propiedad+" es heredado");
    }
}


/*let persona = {
    bolsillo: ,
    listaTareas: [],
  
    cobraSueldo(dinero) {
      this.bolsillo=dinero;
    },
  
    anyadeTarea(tarea){
      this.listaTareas.push(tarea);
    }
  };
  
  let informatico = {
  };
  
  let ordenanza = {
  };
  
  Object.setPrototypeOf(informatico,persona);
  Object.setPrototypeOf(ordenanza,persona);

  informatico.cobraSueldo(2000);
  ordenanza.cobraSueldo(1200);
  console.log( informatico.bolsillo );
  console.log( ordenanza.bolsillo );
*/

//in old scripts there is a property "prototype"
//it is only used when creating object with "new". It assigns [[prototype]] 
let animal = {
    eats: true
};
  
function Rabbit(name) {
    this.name = name;
}
  
Rabbit.prototype = animal;  //when rabbit is created, it assigns animal to [[prototype]]
let rabbit = new Rabbit("Conejo Blanco"); //  rabbit.__proto__ == animal
console.log( rabbit.eats ); // verdadero