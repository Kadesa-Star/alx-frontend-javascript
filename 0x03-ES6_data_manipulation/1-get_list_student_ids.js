export default function getListStudentIds(arr) {
  // Initialize newArr as an empty array
  let newArr = [];
  // Check if arr is an instance of Array
  if (arr instanceof Array) {
    // Use map to extract ids from the array of student objects
    newArr = arr.map(item => item.id);
  }

  return newArr; // Return the array of ids
}
