//1.- Establishing Context
//Exercise 1. Given an object with a greet method, create another object and use the greet method from the first object with it.
//Exercise 2. Create a function that accepts an object as an argument and adds a new property to it. Use call to execute the function with different objects.
//Exercise 3. Define an object with a describe method. Create another object and use bind to link the describe method to the new object.
//Exercise 4. Write a function that logs the values of an object’s properties. Use bind to create a new function with a predefined context for this logging.

//2.- Encapsulation (Private Properties and Getters/Setters)
//Exercise 5. Create a constructor function that initializes private properties _name and _age. Add public getters and setters to access and modify them.
//Exercise 6. Define a class that has a private property _balance. Add a method to increase the balance and another to retrieve its value.
//Exercise 7. Create a constructor function for an object with a private property _score. Add a getter that returns the score and a setter that updates it only if it’s higher than the previous score.
//Exercise 8. Define a class with a private _password property. Add a setter that allows updating the password only if a certain condition is met (e.g., minimum length).

//3.- Inheritance
//Exercise 9. Define a base class Person with a greet method. Create a Student class that inherits from Person and adds a study method.
//Exercise 10. Create a Vehicle base class with a drive method. Define a Car subclass that inherits from Vehicle and adds an accelerate method.
//Exercise 11. Write a Product class with a displayInfo method. Create a Book subclass that inherits from Product and adds an author property.
//Exercise 12. Define a Device class with a turnOn method. Create a Smartphone class that inherits from Device and adds a call method.

//4.- Overriding
//Exercise 13. Define a Person class with a greet method. Create a Friend class that overrides greet to provide a personalized greeting.
//Exercise 14. Create a Shape class with a draw method. Define a Circle class that overrides the draw method with a specific message for circles.
//Exercise 15. Define a Player class with a play method. Create a Musician subclass that overrides play to specify the instrument being played.
//Exercise 16. Write a Machine class with a start method. Create a Car subclass that overrides start to add a message about engine type.

//5.- Destructuring
//Exercise 17. Given an object with properties title, author, and year, destructure it to extract these values and log them.
//Exercise 18. Destructure an array with three elements and assign them to individual variables, then log the values.
//Exercise 19. Create a function that takes an object with properties name, age, and country and destructures them directly in the parameter list.
//Exercise 20. Given a nested object with properties user and address, destructure it to extract userName and city.

//6.- Optional Chaining (?.)
//Exercise 21. Create an object with a user property containing nested properties. Use optional chaining to access a non-existent property without causing an error.
//Exercise 22. Given a book object with an author property, use optional chaining to access the authorName. Try to access a property that doesn’t exist, verifying that it returns undefined.
//Exercise 23. Create a shop object with nested product properties. Use optional chaining to access the price of a product that doesn’t exist, ensuring it returns undefined.
//Exercise 24. Define an object with properties representing a movie and director. Use optional chaining to access the director's name and a non-existent property.