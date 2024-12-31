# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error: passing an argument of the wrong type to a function.

## The Bug

The `bug.ts` file contains a function `greeter` that expects a string as input. However, the code attempts to pass an array of strings to this function, resulting in a type mismatch error during compilation.

## The Solution

The `bugSolution.ts` file provides a corrected version. It addresses the type mismatch by either modifying the function signature to accept an array or by changing how the argument is passed to only pass a single string from the array.