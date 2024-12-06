/////////////
//declaring//
/////////////
//as an object (preferred) or as literal
/*let regObj=new RegExp('caso');
let regLit1=/caso/;

//objects allow to modify regular expressions on the fly
let prefix1 = "c"
let suffix1 = "o"
let regObj2 = new RegExp("[" + prefix1 + "]as" + suffix1);


//////////////
//properties//
//////////////
// .source -> regular expression itself
// .flags -> modifiers applied to the regular expression to alter its behaviour
// .lastIndex -> index where if finishes the las regular expresion found. 0 if it has finished searching
console.log (regObj.source, regObj.flags);


/////////////////
//basic testing//
/////////////////
//regular expressions can be called with test and exec methods of RegExp object...
//test -> returns true if the regular expresion matches the provided text
//exec -> returns an array with the match and modifies lastIndex
let texto="caso asco";
console.log("is text found?: "+regObj.test(texto)+" lastIndex:"+regObj.lastIndex);

//////////////////////
//special characters//
//////////////////////
// . -> any character (just one)
texto="gato";
regObj=new RegExp(".ato");
console.log (regObj.test(texto));

// \ -> it scapes any special character it may have after it 
texto="gato";
regObj=new RegExp("gato.");
regObj2=new RegExp("gato\.");
console.log (regObj.test(texto), regObj2.test(texto));

// [] -> range of characters
regexp = /[aeiou]/i;    // RegExp que acepta vocales (mayús/minús)
console.log (regexp.test("a"), regexp.test("c"));

// [^] -> Not existing any of the characters inside brackets
regexp=/[^aeiou]/;
console.log (regexp.test("a"), regexp.test("c"));

// | -> What is before or after
regexp=/cama|casa/;
console.log(regexp.test("capa"),regexp.test("casa"));
regexp = /cas(i|o)ta/;
console.log(regexp.test("casita"),regexp.test("caseta"));

//[0-9] or \d -> digit from 0 to 9. Just one occurrence, wherever position
regexp=/[0-9]/;
console.log (regexp.test("9a"), regexp.test("a9"), regexp.test("a"), regexp.test("A"));
regexp=/\d/;
console.log (regexp.test("9a"), regexp.test("a9"), regexp.test("a"), regexp.test("A"));

//[^0-9] or \D -> not existing any digit. just one occurrence, wherever position
regexp=/[^0-9]/;
console.log (regexp.test("9a"), regexp.test("a9"), regexp.test("a"), regexp.test("A"));
regexp=/\D/;
console.log (regexp.test("9a"), regexp.test("a9"), regexp.test("a"), regexp.test("A"));

//[A-z] -> Any english capital letter
regexp=/[A-Z]/;
console.log (regexp.test("9a"), regexp.test("a9"), regexp.test("a"), regexp.test("A"));

//[a-z] -> any english not capital letter
regexp=/[a-z]/;
console.log (regexp.test("9a"), regexp.test("a9"), regexp.test("a"), regexp.test("A"));

//[A-Za-z0-9] or \w -> any english letter or number
regexp=/[A-Za-z0-9]/;
console.log (regexp.test("9a"), regexp.test("a9"), regexp.test("a"), regexp.test("A"));
regexp=/\w/;
console.log (regexp.test("9a"), regexp.test("a9"), regexp.test("a"), regexp.test("A"));

//[^A-Z-a-z0-9] or \W -> no alphanumeric character
//[ \t\r\n\f ] or \s tab (\t), cr (\r), lf(\n) or ff(\f) (tabulador, punto y aparte en win (CR, carriage return+LF line feed), punto y aparte en linux (LF), próxima página (FF, Form feed)) )
regexp=/[ \t\r\n\f ]/;
texto="\thola\ndon pepito";
console.log (regexp.test("texto"));
regexp=/\s/;
console.log (regexp.test("texto"));

// ^ -> beginning
regexp=/^mas/;
console.log (regexp.test("mastuerzo"), regexp.test("manoseo"), regexp.test("formas"));

// $ -> ending
regexp=/mas$/;
console.log (regexp.test("mastuerzo"), regexp.test("manoseo"), regexp.test("formas"));

// \b -> ending or preceed by space, dot, comma or end of string
regexp=/mancha\b/;
console.log (regexp.test("en un lugar de la mancha"), regexp.test("señor,tiene usted una mancha en la solapa"), regexp.test("manchas más que el hollín"));

// \B -> oposite to \b*/

// * -> previous character, or group, could appear 0 or more times
//regexp=/ab*/;   //always an a followed 0 or more times by b
/*console.log (regexp.test("a"), regexp.test("aa"), regexp.test("aba"), regexp.test("ba"));     //true, true, true, true

// + -> previous character, or group, could appear 1 or more times
regexp=/ab+/;   //always an a followed 1 or more times by b
console.log (regexp.test("a"), regexp.test("aa"), regexp.test("aba"), regexp.test("ba"));     //false, false, true, false

// ? -> previous character, or group, appears 0 or 1 time
regexp=/ab?/;   //always an a followed 0 or 1 time by b
console.log (regexp.test("a"), regexp.test("aa"), regexp.test("aba"), regexp.test("ba"));     //true, true, true, true

// {n} -> the previous character, or group, repeats n times
regexp=/[0-9]{3}/; //any number repeated 3 times
console.log (regexp.test(1), regexp.test(12), regexp.test(123));     //false, false, true

//{n,} -> the previous character, or group, repeats at least n times
regexp=/ab{3,}/;
console.log (regexp.test("ab"), regexp.test("abbb"), regexp.test("abbb"));     //false, true, true
regexp=/(ab){3,}/;
console.log (regexp.test("ababab"), regexp.test("abab"), regexp.test("abbb"));     //true, false, false

//{n,m} -> the previous character, or group, repeats from n to m times
regexp=/ab{2,3}/;
console.log (regexp.test("ab"), regexp.test("abb"), regexp.test("abbbb"));     //false, true, true
regexp=/(ab){2,3}/;
console.log (regexp.test("abab"), regexp.test("abababab"), regexp.test("abbb"));     //true, true, false

regexp=/^[0-9]{3}$/;


////////////////////////
//flags and properties//
////////////////////////

// i (.ignoreCase)-> case insensitive
let regObjInsensitive=new RegExp('CASO','i');
let regLitInsensitive=/CASO/i;
console.log ("i flag: "+regObjInsensitive.test(texto));


// g (.global)-> global search. It keeps on searching instead of stopping when first is found
texto="caso cosa saco marco amo CASO CASOPLÓN COSA SACO MARCO AMO";
let regObjInsenGlobal=new RegExp('.a.o','gi');

//exec returns an array with the coincidence and the index of the next occurrence at the string. It allows to be called again and starts to search from the lastIndex position until it is 0 (not found any more coincidence). Needs g flag to be activated

regObjInsensitive.lastIndex=0;  //needs to be done as test over this reg exp was called, modifying lastIndex.
//regObjInsensitive.test(texto) modifyes lastIndex so, if it was called before exec exec wouldn't  find first occurrence

do{
    let txt=regObjInsensitive.exec(texto);
    let indice=regObjInsensitive.lastIndex;
    if (indice!=0){
        console.log(txt, indice);
    }
}while (regObjInsensitive.lastIndex!=0);


// m (.multiline)-> multiline. It allows ^ and $ to deal with \r or \n ending line
texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum nobis a quod? Voluptas expedita vero cum eius sunt iusto, pariatur exercitationem consectetur debitis sint obcaecati quod voluptates quam. Magni.
Temporibus, beatae, adipisci voluptate perspiciatis earum voluptatem quam velit obcaecati impedit at voluptas. Veritatis natus ipsam esse beatae? Atque deserunt eum consequatur sed repudiandae doloribus error, corrupti earum provident molestias.
Ipsum, nulla odio modi reiciendis maxime eius tempora sint quod sed, tenetur blanditiis ad vero enim dolore ipsa odit atque fuga, delectus quae facilis excepturi pariatur corporis. Rem, laudantium sit.`;

regObj=new RegExp('^Ipsum','g');
console.log ("text at the beginning found with no m flag: "+regObj.test(texto)); //it doesn't work. Ipsum is behind a \n
const regObjMultiline=new RegExp('^Ipsum','m'); //with m flag, words after \n or \r are considered to be starting words
console.log ("text at the beginning found with m flag: "+regObjMultiline.test(texto));


// u (.unicode)-> unicode. Useful when using specific characters as, for instance, emojis
// y (.sticky)-> searchs only at lastIndex position. Not after, not before
// s (.dotAll)-> whether \n,\r, paragraph separation or line separation should be considered as wildcards or as special characters
texto='hola \nmundo';
regObj=new RegExp('hola mundo');
let regObjDotAll=new RegExp('hola..m...o', 's');    //\n is considered a character and matches .
console.log ("No flag s:"+regObj.test(texto), "Flag s:"+regObjDotAll.test(texto));

// d (.hasIndices) -> if included, .exec result has indices property


//checking if a regular expression has a flag
//includes and the flag or just the name of the property 
console.log ("reg exp has g flag?: "+regObjInsensitive.flags.includes("g"));
console.log ("reg exp has global property?: "+regObjInsensitive.global);
console.log ("reg exp source: "+regObjInsensitive.source,+" reg exp flags: "+regObjInsensitive.flags);


////////////////////
//advanced testing//
////////////////////




//more methods to find matches in strings with regular expressions:
//match-> Returns an array containing all of the matches, including capturing groups, or null if no match is found.
//matchAll->Returns an iterator containing all of the matches, including capturing groups.
//search->Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
//replace->Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
//replaceAll->Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
//split->Uses a regular expression or a fixed string to break a string into an array of substrings.

/*
regObjInsensitive=new RegExp('.A.o','i');
texto="caso cosa saco marco amo CASO CASOPLÓN COSA SACO MARCO AMO";
console.log (texto.match(regObjInsensitive));
texto.match(regObjInsensitive).forEach(ele=>{
    console.log(ele);
});*/


//let str = "We will, we will rock you";
//alert( str.match(/we/gi) );




/////////////////////////////////////////////////////
//Custom validation using JavaScript validation API//
/////////////////////////////////////////////////////
let formularios=document.querySelectorAll("form");
for (let form of formularios){
    form.addEventListener("submit", (evento)=> {
        evento.preventDefault();
    });
}


/*validity offers two methods:
    checkValidity() 	Returns true if an input element contains valid data.
    setCustomValidity() 	Sets the validationMessage property of an input element.

returns a validityState object with several properties describing the valid state of an element:
    customError 	Set to true, if a custom validity message is set.
    patternMismatch 	Set to true, if an element's value does not match its pattern attribute.
    rangeOverflow 	Set to true, if an element's value is greater than its max attribute.
    rangeUnderflow 	Set to true, if an element's value is less than its min attribute.
    stepMismatch 	Set to true, if an element's value is invalid per its step attribute.
    tooLong 	Set to true, if an element's value exceeds its maxLength attribute.
    typeMismatch 	Set to true, if an element's value is invalid per its type attribute.
    valueMissing 	Set to true, if an element (with a required attribute) has no value.
    valid 	Set to true, if an element's value is valid.
*/

document.querySelector("#form2 [name='correo']").addEventListener("input", (evento)=> {
    if (evento.target.validity.typeMismatch){  //if typeMismatch==true, correo value doesn't match the right value for an email field
        evento.target.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");   //by assigning a non-empty message, the field is not valid and the form is not sent
    } else {
        evento.target.setCustomValidity("");       //by assigning an empty message, the field is valid and the form is sent
    }
  });



//form with novalidate that prevents browser from automatically validating form fields
//const form=document.getElementsByTagName("form")[2];
let campoError3=document.querySelector("#form3 .error");
correo=document.querySelector("#form3 [name='correo']");
correo.addEventListener("input", (evento)=> {       //triggered at each time user hits a key
    if (evento.target.validity.valid){
        campoError3.innerHTML="";    //clear error msg
        //campoError3.className="";
    }else{
        muestraError();
    }
});

document.getElementById("form3").addEventListener("submit", (evento)=>{
    console.log("aquie")
    if (!correo.validity.valid){
        muestraError();
    }
});

let muestraError=()=>{
    if (correo.validity.valueMissing){
        correo.setCustomValidity("Introduzca una dirección de correo");
    }else if (correo.validity.typeMismatch){
        campoError3.textContent="El texto introducido no tiene el formato de una dirección de correo válida";
    }else if (correo.validity.tooShort){
        campoError3.textContent="El texto introducido es demasiado corto. Debe tener entre ${correo.minLength} y ${correo.maxLength}";
    }
    //correo.className="error";
}

////////////////////////////////
//no constraint validation API//
////////////////////////////////
//const form=document.getElementsByTagName("form")[3];
correo=document.querySelector("#form4 [name='correo']");
campoError4=document.querySelector("#form4 .error");
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

correo.addEventListener("input", (evento)=>{
    const test = correo.value.length === 0 || emailRegExp.test(correo.value);
//    correo.className = test ? "valid" : "invalid";
    if (test){
        correo.className="valid";
        campoError4.innerHTML="";
        campoError4.className="error";
    }else{
        correo.className="invalid";
    }

});

document.getElementById("form4").addEventListener("submit", (evento)=>{
    const test = correo.value.length === 0 || emailRegExp.test(correo.value);
    if (!test) {
        correo.className = "invalid";
        campoError4.innerHTML = "Espero un correo electrónico";
        campoError4.className = "error";
    
        // Algunos navegadores antiguos no son compatibles con el método event.preventDefault ()
        return false;
      } else {
        correo.className = "valid";
        campoError4.innerHTML = "";
        campoError4.className = "error";
      }
});
