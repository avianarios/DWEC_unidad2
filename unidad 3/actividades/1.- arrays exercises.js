////////////////////////
////simple exercises////
////////////////////////

//1. Creating arrays

//Exercise 1: Create an empty array and then add numbers from 1 to 5.

//Exercise 2: Create an array with the names of five fruits and access the third element.

//Exercise 3: Create an array with five elements, including numbers, strings, and a boolean.

//Exercise 4: Create a 3x3 two-dimensional array that contains numbers from 1 to 9.


//2. Accessing elements

//Exercise 1: Create an array with the names of four cities. Access and display the first and last elements.

//Exercise 2: Given the array [2, 4, 6, 8, 10], access the second and penultimate elements.

//Exercise 3: Given an array of arrays [[1,2], [3,4], [5,6]], access the second element of the third array.

//Exercise 4: Create an array with the days of the week. Use a negative index to access the last day.


//3. Inserting and removing elements

//Exercise 1: Create an array with three colors. Add a new color at the end.

//Exercise 2: Create an array with five numbers. Use pop() to remove the last element and push() to add a new one at the end.

//Exercise 3: Use splice() to remove the third element from a five-fruit array.

//Exercise 4: Insert two elements at position 2 in a three-element array using splice().


//4. Arrays behaving like stacks and queues

//Exercise 1: Create an empty array. Use push() to add three elements and pop() to remove the last one.

//Exercise 2: Use an array as a queue. Add elements to the end using push() and remove the first element with shift().

//Exercise 3: Simulate the behavior of a stack using push() and pop() with an array of numbers.

//Exercise 4: Simulate the behavior of a queue using push() and shift() with an array of names.


// 5. Iterating over arrays

//Exercise 1: Given an array of numbers [1, 2, 3, 4, 5], use a for loop to display each number.

//Exercise 2: Use forEach() to iterate over an array of names and display each one in uppercase.

//Exercise 3: Use a for...of loop to iterate over an array of fruits and display only those starting with "a."

//Exercise 4: Iterate over a two-dimensional array and display each number in the console.


//6. Returning the position of an element or checking if it exists

//Exercise 1: Given an array of fruits, use indexOf() to find the position of "mango."

//Exercise 2: Use includes() to check if the array [3, 5, 7, 9] contains the number 5.

//Exercise 3: Given an array with repeated elements, use lastIndexOf() to find the last occurrence of "banana."

//Exercise 4: Given an array of names, use indexOf() to return the position of a name, or -1 if it doesn't exist.


//7. Array comparison

//Exercise 1: Compare two arrays [1, 2, 3] and [1, 2, 3] using === and explain the result.

//Exercise 2: Write a function that compares two arrays and returns true if they are equal in content and length.

//Exercise 3: Create two two-dimensional arrays and compare them element by element.

//Exercise 4: Use JSON.stringify() to compare two arrays and check if they have the same content.


//8. Finding elements in arrays

//Exercise 1: Given an array of numbers, use find() to locate the first number greater than 10.

//Exercise 2: Use findIndex() to find the position of the first negative number in an array.

//Exercise 3: Given an array with repeated elements, use findLastIndex() to find the last position of a number greater than 5.

//Exercise 4: Given an array of objects representing people, use find() to locate the first person over 30 years old.


//9. Filtering elements

//Exercise 1: Given the array [1, 2, 3, 4, 5], use filter() to return a new array with numbers greater than 3.

//Exercise 2: Filter an array of names to return only those that start with the letter "J."

//Exercise 3: Given an array of objects {name: "John", age: 25}, use filter() to return an array of people over 18.

//Exercise 4: Use filter() and map() to filter numbers greater than 10 and return a new array with the numbers multiplied by 2.


//10. Operations with elements (map, reduce)

//Exercise 1: Use map() to create a new array containing the squares of the numbers [1, 2, 3, 4].

//Exercise 2: Use reduce() to sum all the numbers in the array [5, 10, 15, 20].

//Exercise 3: Given an array of names, use map() to return a new array where each name is in lowercase.

//Exercise 4: Use filter() followed by reduce() to filter numbers greater than 5 and then sum them.


//11. Array concatenation

//Exercise 1: Use concat() to join two arrays of numbers [1, 2, 3] and [4, 5, 6].

//Exercise 2: Concatenate two arrays of strings and display the length of the new concatenated array.

//Exercise 3: Concatenate three arrays of fruits and use join() to convert the new array into a string.

//Exercise 4: Use concat() to join two-dimensional arrays and then access one of their elements.


//12. Sorting arrays

//Exercise 1: Use sort() to sort an array of numbers [3, 1, 4, 1, 5, 9] in ascending order.

//Exercise 2: Alphabetically sort an array of names using sort().

//Exercise 3: Use sort() with a comparison function to sort an array of numbers from largest to smallest.

//Exercise 4: Sort an array of objects {name: "John", age: 25} by the age property using sort().


//13. Reversing arrays

//Exercise 1: Use reverse() to reverse an array of numbers [1, 2, 3, 4, 5].

//Exercise 2: Reverse an array of strings and use join() to create a string with the words in reverse order.

//Exercise 3: Given a two-dimensional array, use reverse() to reverse the order of the rows.

//Exercise 4: Use sort() and then reverse() to sort and then reverse an array of numbers.


//14. Filling arrays with values (fill)

//Exercise 1: Use fill() to fill an empty array of length 5 with the number 0.

//Exercise 2: Fill part of an array of numbers [1, 2, 3, 4, 5] with the value 9 starting from index 2.

//Exercise 3: Create an array of length 10 and fill it with the value "x" in the last 5 elements.

//Exercise 4: Use fill() to replace the first 3 elements of an array with the value "A."


//15. Destructuring

//Exercise 1: Destructure a two-element array [10, 20] into two variables.

//Exercise 2: Destructure the first two elements of an array and store the rest in another variable using the spread operator.

//Exercise 3: Given a two-dimensional array, destructure the first row into three variables.

//Exercise 4: Destructure an array of objects {name: "John", age: 25} to get the name and age properties from the first object.

/////////////////////////////
////final array exercises////
/////////////////////////////

//Exercise 1: Given an array of numbers, remove all negative numbers, reverse the order of the array, and then sum the remaining even numbers. Return the result.

//Exercise 2: You have an array of objects representing people, where each object has the properties name, age, and profession. Filter out people older than 30 who work as "engineers." Then, sort the filtered people by age in descending order and return a new array with just their names.

//Exercise 3:Given an array of words, remove words that are less than 5 letters long, convert them all to uppercase, sort them alphabetically, and join them into a single string separated by dashes (-). Return the resulting string.

//Exercise 4:You have two arrays of numbers. First, combine both arrays, removing any duplicates. Then, find the highest and lowest numbers and return a new array containing only the numbers between the second lowest and the second highest values (inclusive).

//Exercise 5:Given a two-dimensional array representing a warehouse table of products (each subarray contains the product name, quantity in stock, and price per unit), do the following:

    //Find the product with the highest quantity in stock.
    //Calculate the total value of that product based on its quantity and price.
    //Return an object with the product name and the total value calculated.

//Exercise 6:Given an array of numbers, separate the odd numbers from the even ones. Then, multiply the even numbers by 2 and the odd numbers by 3. Finally, combine both sets of numbers into a single array sorted from lowest to highest and return the result.

//Exercise 7:You have an array of objects representing different books, where each object has the properties title, author, and year of publication. Filter out books published after the year 2000, group them by author, and return an object where each key is the author’s name, and the value is an array with the titles of their books.

//Exercise 8:Given an array of numbers, return a new array where the numbers are squared if they are odd and cubed if they are even. Then, remove any number greater than 500 and return the result.

//Exercise 9:You have an array of strings representing usernames. You must perform the following actions:

    //Remove duplicate names.
    //Filter names that start with a vowel.
    //Sort the remaining names in descending order by length.
    //Return a string where each name is separated by a comma and a space.

//Exercise 10: Given a two-dimensional array representing a grid of colors (each subarray is a row of colors), do the following:

    //Reverse the order of the rows and columns of the array (matrix transposition).
    //Replace all colors containing the letter "a" with "black."
    //Return the new grid.
