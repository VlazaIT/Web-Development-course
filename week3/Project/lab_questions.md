## Event loop lab

**What is the Node.js Event Loop, and how does it work?**
- The Node.js Event Loop lets Node.js run tasks without waiting for others to finish. It starts tasks, moves on, and then comes back to them when they're don, all without stopping or "blocking".

**Why is Node.js well-suited for building scalable and high-performance applications?**
- Node.js can handle many tasks at once because it doesn't wait for slow tasks to finish. This makes it fast and efficient, especially for web servers and apps with many users.

**What are the benefits of non-blocking I/O in Node.js?**
- With non-blocking I/O, Node.js doesn't get stuck on slow tasks. This means it can keep working, making apps run smoothly and handle more users at the same time.

## Fetch API lab

**What is the purpose of Promises in asynchronous JavaScript?**
- Promises let you handle future results of asynchronous operations. They make it easier to organize and manage asynchronous code by providing a clear way to handle both success and failure cases.

**How does the .then method work in Promises?**
- The .then method is used to schedule what happens after a Promise resolves successfully. It gets the result of the Promise as an argument and runs the provided function with that result.

**How do you handle errors in Promises using .catch?**
- The .catch method captures any errors that occur during the execution of the Promise chain. It gets the error as an argument and lets you handle or display it.

## Fetch API with async/await

**What is the purpose of async/await in asynchronous JavaScript?**
- async/await makes asynchronous code look and behave like synchronous code. This makes it easer to read and write, especially when dealing with many asynchronous operations.

**How does await work with the Fetch API in Node.js?**
- await pauses the function until the Promise resolves. When used with the Fetch API, it waits for the network request to complete before moving to the next line, without blocking the rest of the app.

**How do you handle errors using try...catch with async/await?**
- In async/await, you use the try...catch block. The code inside the try block runs, and if there's an error, it jumps to the catch block, allowing you to handle or display the error.