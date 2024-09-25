//       Since we have not talked yet about native JavaScript objects, like Math, usage of Math methods, as sqrt or pow, is not allowed
//1. Take loop exercises from 4 until the last one and rewrite them by using functions
//2. Write a function sqrt(x) that returns the square of x
//3. Rewrite sqrt function as an expression function
//4. Rewrite sqrt function as an arrow function
//5. Write a function pow(x,n) that returns x in power n.  Ask the user fot both numbers.
//6. Rewrite pow function as an expression function
//7. Rewrite pow function as an arrow function
//8. Write a function min(a,b) which returns the least of two numbers a and b.
//9. Rewrite min function as an expression function 
//10. Rewrite min function as an arrow function
//11. Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
/*12. Write a function named calculateSupply that: 
    a) takes 2 arguments: age, amount per day. 
    b) calculates the amount consumed for rest of the life (based on a constant max age). 
    c) outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X" 
    Express it as an arrow function, if possible*/
//13. Create a function that greets the user by his name and with a message according to the moment of the day (morning, afternoon, night). It accepts two parameters: user name and a callback function.
//14. Create a function that accepts three parameters: two numbers and the mathematical operation to be performed with these numbers. The following mathematical operations must be supported: addition, subtraction, division and multiplication. Use callback functions.