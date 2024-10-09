// task_5/js/main.ts

// Interface for MajorCredits
interface MajorCredits {
  credits: number;
  brand: 'Major'; // Brand property to uniquely identify the interface
}

// Interface for MinorCredits
interface MinorCredits {
  credits: number;
  brand: 'Minor'; // Brand property to uniquely identify the interface
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major' // Return the brand property as well
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor' // Return the brand property as well
  };
}

// Example Usage
const major1: MajorCredits = { credits: 3, brand: 'Major' };
const major2: MajorCredits = { credits: 4, brand: 'Major' };

const minor1: MinorCredits = { credits: 2, brand: 'Minor' };
const minor2: MinorCredits = { credits: 1, brand: 'Minor' };

// Sum major and minor credits
const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log('Total Major Credits:', totalMajorCredits); // { credits: 7, brand: 'Major' }
console.log('Total Minor Credits:', totalMinorCredits); // { credits: 3, brand: 'Minor' }
