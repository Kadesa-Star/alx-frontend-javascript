# 0x01. ES6 Promises

## Description
This project focuses on understanding and implementing ES6 Promises in JavaScript. The objective is to handle asynchronous operations more effectively using Promises, `async/await`, and error handling mechanisms like `try/catch`. The project involves functions that simulate real-world scenarios such as uploading a photo and creating a user, and returns data in the specified format.

## Learning Objectives
By the end of this project, you should be able to:
- Understand Promises: how, why, and what.
- Use `then()`, `resolve()`, and `catch()` methods effectively.
- Utilize all methods of the `Promise` object, including `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()`.
- Apply `throw` and `try/catch` for exception handling.
- Use the `await` operator to simplify asynchronous code.
- Write and use `async` functions.

## Response Data Formats
- `uploadPhoto` returns:
  ```json
  {
    "status": 200,
    "body": "photo-profile-1"
  }
