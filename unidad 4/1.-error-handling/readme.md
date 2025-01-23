## Error Propagation

When an error occurs, it keeps propagating to the parent functions that called it, until it is handled or until it reaches the global function (window object in a web browser or global object in Node), where it ends up stopping the program.

## Types of Errors

- **Predictable**: These arise from conditions that we know could occur and can therefore be anticipated.  
  Examples:  
    - Trying to divide by zero  
    - Passing an invalid value to a function  
    - Looking for a file that does not exist

- **Unpredictable**: These arise from external or unforeseen factors, so they cannot be easily anticipated. These errors may be related to the system environment or to unexpected circumstances within the code that we cannot foresee during development.  
  Examples:  
    - Network failure or loss of connection to external servers  
    - Stack overflow due to unexpected data or too big data  
    - Hardware failures, like a faulty hard disk drive

## Error Control

Errors can be controlled by using two methods: `if` statements or `try..catch..finally` blocks.

### When to Use an `if` Statement?
- To treat expected or common errors.
- The programmer chooses whether to interrupt execution in the `if` block.
- If you want to keep the code simple.

### When to Use a `try...catch` Statement?
- To treat severe, exceptional, or unpredictable errors.
- If you want to force the code to immediately handle the error before continuing the execution of the code beneath it (execution is interrupted until the error is handled).

## Advantages of Using `try..catch`
- It interrupts the flow completely, forcing you to deal with the problem.
- Serious errors are easier to identify and handle globally.
- Facilitates debugging and error logging.

## How is a `try...catch...finally` Block Used?

1. The code in `try {...}` is executed.
2. If an error occurs:
    1. The execution of the code inside the `try` block is halted.
    2. An **Error** object is created (although another value can be thrown, this is not recommended).
    3. The control is passed to the `catch` block, where the error (or value) is handled.
3. After handling the error, the program executes the `finally` block, and code outside `try...catch` runs normally.

[Back to the index](../readme.md)