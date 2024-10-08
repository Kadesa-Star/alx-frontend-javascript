// 1-get_list_student_ids.js
export default function getListStudentId(students) {
  // check if the input is an array; if not, return an empty array
  if (!Array.isArray(students)) {
    return [];
  }
  // use the map function to extract the ids from the student objects
  return students.map(student => student.id);
}
