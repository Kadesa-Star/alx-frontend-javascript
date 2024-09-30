# ES6 Basics

## Introduction
This project is focused on ECMAScript 6 (ES6), also known as ECMAScript 2015. ES6 introduced several new features and improvements to JavaScript that help make code cleaner, more readable, and maintainable. This project covers key concepts like arrow functions, default parameters, rest and spread operators, and iterators.

## Learning Objectives
By the end of this project, you should be able to explain the following concepts without external references:
- What ES6 is
- New features introduced in ES6
- The difference between constants (`const`) and variables (`let` and `var`)
- Block-scoped variables and the `let` keyword
- Arrow functions and function parameters
- Rest and spread operators in function parameters
- String templating with template literals
- Object creation and properties in ES6
- Iterators and `for-of` loops

## ES6 Features Overview

### 1. Constants and Variables
- **`const`**: Used to declare constants. These values cannot be reassigned once defined.
- **`let`**: Used to declare block-scoped variables, which means they are only available within the block they are defined.

### 2. Arrow Functions
Arrow functions provide a shorter syntax for writing functions in ES6. They also inherit the `this` value from the enclosing context, making them useful in many scenarios where regular functions may not behave as expected.
```js
const add = (a, b) => a + b;

