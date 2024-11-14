//1.- Establishing Context
//Exercise 1. Given an object with a greet method, create another object and use the greet method from the first object with it.
//Exercise 2. Create a function that accepts an object as an argument and adds a new property to it. Use call to execute the function with different objects.
//Exercise 3. Define an object with a describe method. Create another object and use bind to link the describe method to the new object.
//Exercise 4. Write a function that logs the values of an object’s properties. Use bind to create a new function with a predefined context for this logging.

//2.- Inheritance
//Exercise 5. Define a base class Person with a greet method. Create a Student class that inherits from Person and adds a study method.
//Exercise 6. Create a Vehicle base class with a drive method. Define a Car subclass that inherits from Vehicle and adds an accelerate method.
//Exercise 7. Write a Product class with a displayInfo method. Create a Book subclass that inherits from Product and adds an author property.
//Exercise 8. Define a Device class with a turnOn method. Create a Smartphone class that inherits from Device and adds a call method.

//3.- Encapsulation
//Exercise 9. Create a constructor function that initializes private properties name and age. Add public getters and setters to access and modify them.
//Exercise 10. Define a class that has a private property balance. Add a method to increase the balance and another to retrieve its value.
//Exercise 11. Create a constructor function for an object with a private property score. Add a getter that returns the score and a setter that updates it only if it’s higher than the previous score.
//Exercise 12. Define a class with a private password property. Add a setter that allows updating the password only if a certain condition is met (e.g., minimum length).

//4.- Overriding methods
//Exercise 13. Define a Person class with a greet method. Create a Friend class that overrides greet to provide a personalized greeting.
//Exercise 14. Create a Shape class with a draw method. Define a Circle class that overrides the draw method with a specific message for circles.
//Exercise 15. Define a Player class with a play method. Create a Musician subclass that overrides play to specify the instrument being played.
//Exercise 16. Write a Machine class with a start method. Create a Car subclass that overrides start to add a message about engine type.

//5- Static method and properties
//Exercise 17: Create a class with static properties. Create a class called Vehicle that has a static property numberOfWheels with value 4. Then, add a static method getNumberOfWheels() that returns the value of numberOfWheels.
//Exercise 18: Create a class called InstanceAccount that has a static counter property that is incremented each time a new instance of the class is created. Add a static method getInstances() that returns the total number of instances created.
//Exercise 19: Create a class called Product that has the properties name and price. Define a static method called comparePrices() that receives two instances of Product and returns which one has the higher price.
//Exercise 20: Create a class called Text with a static method capitalize() that receives a text string and returns that string with the first letter capitalized.

//5.- Unstructuring objects
//Exercise 21. Given an object with properties title, author, and year, destructure it to extract these values and log them.
//Exercise 22. Destructure an array with three elements and assign them to individual variables, then log the values.
//Exercise 23. Create a function that takes an object with properties name, age, and country and destructures them directly in the parameter list.
//Exercise 24. Given a nested object with properties user and address, destructure it to extract userName and city.

//6.- Object operators
//Exercise 25. Create an object with a user property containing nested properties. Use optional chaining to access a non-existent property without causing an error.
//Exercise 26. Given a book object with an author property, use optional chaining to access the authorName. Try to access a property that doesn’t exist, verifying that it returns undefined.
/*Exercise 27. Create a class hierarchy with the following classes:

    Animal: a base class with a property name and a method speak().
    Dog: a class that inherits from Animal and adds a method bark().
    Cat: a class that inherits from Animal and adds a method meow().

Then, create objects of type Dog and Cat and use the instanceof operator to check:

    If the object is an instance of Animal.
    If the object is an instance of Dog or Cat.*/
/*Exercise 28.  Create a function called isVehicle that takes an object and uses instanceof to check if the object is an instance of the Vehicle class. The Vehicle class should have the properties brand and model.

Then, create the following classes:

    Vehicle: a base class with properties brand and model.
    Car: a class that inherits from Vehicle and adds a property numberOfDoors.
    Motorcycle: a class that inherits from Vehicle and adds a property handlebarType.

Create instances of Car and Motorcycle and check if they are vehicles using the isVehicle function.*/

//7.- Mixins
/*Exercise 29: Mixin for Logging. Create a mixin LoggerMixin that adds two methods to any class: logInfo (to log basic information about an object) and logError (to log an error message). Then, use this mixin with a User class to add logging functionality.
Instructions:
    Create a LoggerMixin that includes the two methods: logInfo and logError.
    Create a User class that has properties name and email.
    Apply the LoggerMixin to the User class.
    Create a User instance and call the logInfo and logError methods.*/

/*Exercise 30: Mixin for Shape Area Calculation. Create a mixin AreaMixin that provides a method calculateArea for calculating the area of a shape. Use this mixin with a Rectangle class and a Circle class to calculate the areas of both shapes.
Instructions:
    Create a Rectangle class with properties width and height.
    Create a Circle class with property radius.
    Create a mixin AreaMixin that adds a method calculateArea to both classes.
    Apply AreaMixin to both Rectangle and Circle.
    Create instances of Rectangle and Circle and calculate their areas.*/
/*Exercise 31: Mixin for Extendable Methods. Create a mixin ExtendableMixin that adds two methods: extend (to add a new method to a class) and removeMethod (to remove a method from a class). Use this mixin with a Car class to extend and modify its methods.
Instructions:
    Create a Car class with a drive method.
    Create a mixin ExtendableMixin that adds extend and removeMethod methods to the class.
    Use the extend method to add a stop method to the Car class.
    Use the removeMethod method to remove the drive method from the Car class.
    Show the result of calling the drive and stop methods before and after modifying the class.
/*Exercise 32: Mixin for Data Validation. Create a mixin ValidationMixin that provides data validation methods for an object. Use this mixin with a Product class to validate product data (e.g., name, price).
Instructions:
    Create a Product class with properties name and price.
    Create a mixin ValidationMixin that includes a validateName method (to check if the name is not empty) and a validatePrice method (to ensure the price is a positive number).
    Apply the ValidationMixin to the Product class.
    Create a Product instance and call the validation methods to check if the data is valid.*/