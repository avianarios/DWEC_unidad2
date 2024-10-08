//Unstructuring
//Exercise 1:Use destructuring to create separate variables for name and city. Then print them to the console.
const usuario = { nombre: "Carlos", edad: 25, ciudad: "Madrid" };

//Exercise 2: Use destructuring to extract marca and año, and then print them on the console in a message saying ‘The car is a [marca] of the year [año]’.

const coche = { marca: "Toyota", modelo: "Corolla", año: 2021 };

//this advanced usage
//Exercise 3: Create a person object with a name property and a greet method. Inside the method, use this to access name. Then, it displays an error when trying to use greet outside the object. Fix the error using bind.

//Exercise 4:Define a counter object that has an increment method that increments a value property. Try calling the method directly (without bind) and show why the value is not updated. Then, use bind to fix the problem.

//Exercise 5:Create an auto object with a details method. Use an arrow function inside this method to access this. Show that it doesn't work and fix the broken reference by changing the arrow function to a normal function.

//Exercise 6:Define a group object that has a members property and a listMembers method that prints all members. Use an arrow function on listMembers and explain why members are not accessed correctly. Then rewrite the method using a normal function.


//optional chaining ?.
//Exercise 7: Create a company object that has an employee property (which is an array of objects). Each employee object must have properties such as name and job title. Use the optional chaining (?.) to access the first employee's job title, making sure to handle the case where employees might be undefined.

//Exercise 8: Define a user object that contains nested properties. Try to access a deeply nested property using optional chaining. Demonstrate how to avoid an error if any part of the string is undefined.

//Exercise 9: Create a getAge function that receives an object with a person property. Use the optional chaining to access the age property. Make sure the function returns null if person does not exist.

//Exercise 10: Construct a cart object that has properties for products and total. Use the optional chaining to access the total property and also to access the first product if products is defined.


//getters and setters
//Exercise 11: Create a rectangle object that has width and height properties. Implement a getter to calculate the area of the rectangle and a setter to update the width and height at the same time.

//Exercise 12: Define a BankAccount object with properties balance and number. Add a getter to get the formatted balance (e.g., in currency format) and a setter to update the balance.

//Exercise 13: Create a person object that has properties name and age. Implement a getter to return the description of the person and a setter to limit the age to a maximum value (e.g. 120).

//Exercise 14: Define a product object that has properties name and price. Create a setter that prevents setting a negative price and a getter that returns a message if the product is on sale.


//prototypical inheritance and method overriding
//Exercise 15: Create an animal object with a makeSound method. Then, create a dog object that inherits from animal and override the makeSound method so that it returns ‘Woof’. Show that both methods work.

//Exercise 16: Define a vehicle object with a type property and a details method. Create a motorbike object that inherits from vehicle and override details to include specific information about the motorbike.

//Exercise 17: Create a person object that has a show up method. Then, create a student object that inherits from person and override the method to include the grade in which it studies.

//Exercise 18: Define a book object with an info method. Then, create an eBook object that inherits from book and override the info method to include additional details about the digital format.



//////////////////////////////
////final object exercises////
//////////////////////////////

//Exercise 1: You have two objects:

const person = { name: "Ana", age: 25 };
const extraData = { age: 30, city: "Madrid", profession: "Engineer" };

//Merge both objects in such a way that if there are duplicate properties, keep the value from the object that comes first. Then, add a new property called nationality with the value "Spanish" and delete the city property. Finally, check if the final object contains the properties age and profession.

//Exercise 2: Create an object user with the following properties:

    name: "Carlos"
    surname: "Pérez"
    age: 35

//Add a method inside the object that returns the full name of the user. Then, iterate over all the properties of the object and make sure to print only the own properties (not inherited ones).

//Exercise 3: Given the following object:

const car = { brand: "Ford", model: "Fiesta", year: 2020 };

//Make it impossible to add new properties to this object, but allow the existing properties to be modified. Then, add a new property color: "red" and change the value of model to "Focus". Print the object to check if the changes have been applied.


//Exercise 4: You have the following object:

const product = { name: "Laptop", price: 1000 };

//You must implement a solution to prevent the object's properties from being modified, but you should be able to delete properties if needed. After that, try to change the price to 1200 and delete the name property. Print the final result.


//Exercise 5: Create an object called book with the following properties:

    title: "Don Quixote"
    author: "Miguel de Cervantes"
    pages: 500

//Add a method that allows modifying the number of pages and ensures the new value is greater than 0. Also, implement a solution to ensure none of the object's properties can be deleted. Print the object to confirm the changes have been applied.


//Exercise 6: Starting with the following object:

const employee = { name: "Lucía", salary: 3000 };

//Create a full copy of this object so that modifying the copy doesn't affect the original object. Change the salary in the copy to 3500 and print both objects to confirm the original hasn't been altered.


//Exercise 7:You have two objects representing the grades of two students:

const student1 = { math: 8, english: 9, history: 7 };
const student2 = { math: 9, english: 8, history: 8 };

//Create a function that takes these two objects and returns true if they have at least one grade in common (i.e., if any subject has the same grade for both students). If they don't have any grades in common, it should return false.


//Exercise 8: Given the following object:

const bankAccount = { owner: "Juan", balance: 500 };

//Implement a way to lock all the properties of the object so that they cannot be modified, deleted, or new properties added. Then, try to change the balance to 600, delete the owner property, and add a new property bank: "BBVA". Print the object to verify the results.
