/*Exercise 1: Creating a basic error. Create a function called checkNumber that takes a number as a parameter. If the number is less than or equal to 0, throw an error with the message "The number must be greater than 0". If the number is valid, the function should return "Valid number".
Objective: Practice creating and handling basic errors with throw.*/

/*Exercise 2: Error handling with try...catch. Modify the checkNumber function to wrap the call inside a try...catch block. If the error is caught, display the error message in the console.
Objective: Use try...catch to handle errors.*/

/*Exercise 3: Using the TypeError type of error. Create a function called checkString that takes a parameter str. If the parameter is not a string, throw a TypeError with the message "The value is not a string". If it's a string, the function should return the length of the string.
Objective: Understand how to use specific error types like TypeError.*/

/*Exercise 4 (nodejs): Error properties. Create a function called processFile that takes a file path. If the file does not exist, throw an error with the message "File not found". Catch the error and display the message, name, and stack trace in the console.
Objective: Access the name, message, and stack properties of an error.*/

/*Exercise 5: Creating custom errors. Create a class ValidationError that extends Error. This class should accept a custom message when instantiated. Then, create a function called validateAge that takes an age. If the age is less than 18, throw a ValidationError with the message "Invalid age, must be 18 or older".
Objective: Create and use a custom class that extends Error.*/

/*Exercise 6: Chaining errors. Modify the validateAge function from the previous exercise so that, in case of an error, you pass a ValidationError to another error (using throw inside a catch). Catch the chained error and display its message and name in the console.
Objective: Practice error chaining.*/

/*Exercise 7: Throwing errors in different scenarios. Create a function called performOperation that takes two parameters: num1 and num2. If num2 equals 0, throw an Error with the message "Cannot divide by zero". If either parameter is not a number, throw a TypeError. If the parameters are valid, perform the division and return the result.
Objective: Use different types of errors (Error, TypeError) in a single flow.*/

/*Exercise 8: Validating user input with multiple conditions. Create a function validateInput that takes a number. If the number is NaN, throw an Error with the message "Invalid input, not a number". If the number is less than 10, throw a RangeError with the message "The number must be greater than or equal to 10". If the number is valid, return the value multiplied by 2.
Objective: Use multiple types of errors in a single code block.*/

/*Exercise 9: Throwing errors without try...catch. Create a function checkPassword that takes a password. If the length of the password is less than 8 characters, throw an Error with the message "The password must have at least 8 characters". There is no need to use a try...catch block in this case, simply throw the error directly.
Objective: Throw errors without using try...catch.*/

/*Exercise 10: Validating email format. Create a function validateEmail that takes an email address as a parameter. If the email doesn't have the correct format (use a regular expression to validate the format), throw a SyntaxError with the message "Invalid email address".
Objective: Use a specific type of error (SyntaxError) and work with format validation.*/

/*Exercise 11: Custom errors with multiple properties. Create a CustomError class that extends Error and has additional properties like code (a numeric error code) and timestamp (a date and time value when the error was thrown). Then, throw this error in a processData function and display the custom properties along with the error message.
Objective: Create custom errors with additional properties.*/

/*Exercise 12: Creating an asynchronous function with error handling. Create an asynchronous function readFileAsync that takes a file name. If the file cannot be read, throw an Error with the message "File not found". Use try...catch to handle the error when calling the function.
Objective: Apply error handling in asynchronous functions.*/