// Step 1: Define the Teacher interface
interface Teacher {
  readonly firstName: string; // This means 'firstName' can only be set during initialization
  readonly lastName: string;  // Same as above for 'lastName'
  fullTimeEmployee: boolean;  // This attribute is mandatory
  yearsOfExperience?: number; // Optional attribute
  location: string;           // Mandatory attribute
  [key: string]: any;         // Index signature to allow additional properties
}

// Step 2: Initialize the teacher object with required properties and additional attributes
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Extra attribute not explicitly defined in the interface
};

// Step 3: Log the object to verify the implementation
console.log(teacher3);
