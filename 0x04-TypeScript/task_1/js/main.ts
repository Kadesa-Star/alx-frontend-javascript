// main.ts

// Step 1: Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Step 2: Implement the printTeacher function according to the interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Step 3: Test the printTeacher function
console.log(printTeacher("John", "Doe"));  // Output: J. Doe
console.log(printTeacher("Alice", "Smith"));  // Output: A. Smith
