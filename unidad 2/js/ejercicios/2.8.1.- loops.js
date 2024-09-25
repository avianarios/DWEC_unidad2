
//1. What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  alert( i-- );
}

//2. Rewrite the following code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
  Console.log ( `number ${i}!` );
}

//3. Write a loop which keeps prompting for a number until it is greater than 100 or enters an empty line.
//4. Using while loop, create two arrays: one with even numbers and another one with odds numbers. Both of them from 1 to n, being n a number provided by user. Using a for loop, create a third array whose nth number is the sum of nth number of both arrays.
//5. Write code which outputs prime numbers from 1 to n, being the latter a numbrer provided by user.
//6. Take odd numbers array and remove the prime numbers from it. Tip: as we have not seen array methods yet, the only way is to create a new array without those numbers
//7. Ask the user for a number n. Create an array of n random numbers and print the highest one. Use the following code to generate a random number between 0 and 9999
Math.floor(Math.random() * 9999)

//8. Ask the user for a string and print it reversed
//9. Ask the user for a number. Print a isosceles triangle made of asterisks with as many levels as the number the user entered.
//10. Ask the user for a number between 3 and 25. Calculate its factorial.
//11. Ask the user for a string and write a program that checks if it is palindrome (it is spelled the same forward and backward).
//12. Use the following code to generate a random pin number of 4 digits. Write code to allow a user to try to guess the number in 4 attempts
let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;