// main.ts

// Step 1: Define the interface for the constructor
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Step 2: Define the interface for the class methods
interface StudentClassMethods {
  workOnHomework(): string;
  displayName(): string;
}

// Step 3: Implement the StudentClass
class StudentClass implements StudentClassConstructor, StudentClassMethods {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Step 4: Test the StudentClass
const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
