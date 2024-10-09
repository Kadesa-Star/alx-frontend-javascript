// Step 1: Define the Teacher interface
interface Teacher {
  readonly firstName: string;  // Can only be set during initialization
  readonly lastName: string;   // Same as above
  fullTimeEmployee: boolean;   // Required attribute
  yearsOfExperience?: number;  // Optional attribute
  location: string;            // Required attribute
  [key: string]: any;          // Allows additional attributes
}

// Step 2: Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;     // New required attribute specific to Directors
}

// Step 3: Initialize a Directors object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,         // Required by Directors interface
};

// Step 4: Log the Directors object to the console
console.log(director1);
