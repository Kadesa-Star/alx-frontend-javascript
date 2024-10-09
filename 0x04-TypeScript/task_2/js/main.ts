// main.ts

// Step 1: Define the string literal type Subjects
type Subjects = 'Math' | 'History';

// Step 2: Create the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  
  // This line should never be reached due to the type restriction
  return 'Unknown subject';
}

// Step 3: Test the teachClass function
console.log(teachClass('Math'));      // Teaching Math
console.log(teachClass('History'));   // Teaching History
