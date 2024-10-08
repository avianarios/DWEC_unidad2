//creating objects
//1: Create an object called book containing the properties title, author and year. Initialise the object with appropriate values. Then, print the object to the console.

//2: Create a constructor function called Person that has the properties name and age. Then, create two instances of Person and display their properties in the console.

//3: Create an object called pet that has properties type, name and age. Initialise the object with values and then print a sentence containing all the information about the pet to the console.

//4: Create an empty object and assign properties to it after its creation. Then print the complete object to the console.

//accessing object properties
//5: Given the following object, Access and display the model of the car in the console.

const coche = { marca: "Ford", modelo: "Fiesta", año: 2020 };

//6: Use bracket notation to access the year property of the car object and display its value.

//7: Given the following object, Access the profession property and change its value to ‘Developer’. Then, print the updated object.

const persona = { nombre: "Sofia", profesion: "Diseñadora", edad: 30 };

//8: Use bracket notation to access and display the age of person.


//adding and removing properties
//9: Add a new colour property to the car object you created earlier and set its value. Then print the updated object.

//10: Delete the model property of the car object and display the object in the console to verify that it has been deleted.

//11: Create a movie object with properties title and director. Then, add a genre property and set its value. Display the complete object.

//12: Remove the director property from the movie object and display the result in the console.


////preventing object from being changed////
//13: Create a user object with properties name and age. Use Object.seal to seal the object. Then, try adding a new email property and modifying the age property. Show in console the object after each attempt.

//14: Define a configuration object that has properties subject, notifications, and source. Seal the object with Object.seal. Try to remove the notifications property and change the font value. Display the final object in the console.

//15: Create a car object with properties make, model, and year. Use Object.seal and then try to remove the model property. Next, try changing the year value. Check the state of the object in the console.

//16: Create a profile object containing properties such as name, age, and city. Stamp the object and then try adding a country property. Also try modifying the city property. Show the final object in the console.

//17: Create a book object with properties title, author, and year. Use Object.freeze to freeze the object. Try changing the year property and adding a new publisher property. Display the object in the console after each attempt.

//18: Define a player object containing properties name, team, and points. Freeze the object using Object.freeze and then try to modify the points property. Show the object in the console to verify that it has not changed.

//19: Create a city object with properties name, country, and population. Freeze the object and try to remove the population property. Show the result in the console to verify that the property still exists.

//20: Create a product object that has properties name, price, and available. Use Object.freeze and then try to change the price value and remove the available property. Show the final object in the console.

//21: Create an employee object with properties name, position, and salary. Use Object.preventExtensions on the object. Then, try adding a new department property and change the salary value. Display the final object in the console.

//22: Define a task object that has properties description, completed, and priority. Prevent extensions on the object and then try to remove the priority property and add a date property. Check the status of the object in the console.

//23: Create a client object with properties name, phone, and address. Apply Object.preventExtensions to the object. Then, try changing the phone number and adding a new email property. Show the object in the console to check what changes have been allowed.

//24: Create an event object that has name, date, and location properties. Use Object.preventExtensions and then try adding an attendee property. Modify the date property and remove location. Show the final object in the console.



////getting object information////
//25: Create an animal object with species and colour properties. Then, create a dog object that inherits from animal. Check if dog has the species property using hasOwnProperty and display the result in the console.

//26: Define a phone object with properties make, model, and year. Add a new property Property to the object. Use hasOwnProperty to check if newProperty is a property of the object. Display the result in the console.

//27: Create a fruit object with properties name and colour. Then, create an apple object that inherits from fruit. Check the properties using a for...in loop and hasOwnProperty to distinguish between owned and inherited properties.

//28:Define a game object with properties title, genre, and platform. Create a gameFavourite object that inherits from game. Use hasOwnProperty in a for...in loop to list only the gameFavorite's own properties and omit the inherited ones.



//Iterating through objects
//13: Iterate over the object's properties and display each property and its value in the console.

const estudiante = { nombre: "Ana", edad: 21, carrera: "Ingeniería" };

//14: Use Object.keys() to get an array of the object's properties and then iterates over that array, displaying each property and its value.

const libro = { titulo: "1984", autor: "George Orwell", anio: 1949 };

//copy, clone and compare
//15: Create an original object with some properties. Then use Object.assign() to create a shallow copy of the object. Modify a property in the copy and display both objects to see the effects.

//16: Write a function that compares two objects and determines if they are the same (i.e. have the same properties and values). Use this function to compare two objects.

//17: Write a function that accepts two objects and returns true if they have at least one property in common, or false if they do not. Test this function with different pairs of objects.


//basic "this" usage
//18: Create a counter object with a value property initialised to 0 and an increment method that increments value by 1. Use this inside the method to refer to the property. Then, call the method and display the updated value in the console.

//19: Given the following object, Call the saludar method and check how this is used to access the name property.
const persona = {
    nombre: "Laura",
    saludar: function() {
      console.log("Hola, soy " + this.nombre);
    }
  };
  
//20: Create a clock object that has a time property and a showTime method that prints ‘The current time is [time]’. Use this to access the time property. Initialise time with a value and call the method.

//21: Modify the person object from the previous problem to have a method birthdayYear that increments the age property by 1. Call this method and check the age value after calling it.