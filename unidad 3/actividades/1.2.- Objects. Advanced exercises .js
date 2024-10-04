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




