export default function getListStudentIds(arr) {
  // Check if arr is an array; if not, return an empty array
  if (!Array.isArray(arr)) {
    return [];
  }

  // Use the map function to extract ids from the student objects
  return arr.map(item => item.id);
}
