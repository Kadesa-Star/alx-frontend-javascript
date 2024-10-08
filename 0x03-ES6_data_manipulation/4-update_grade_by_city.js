export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students based on the specified city
  const filterStudents = students.filter(
    (student) => student.location === city,
  );

  // Map over the filtered students and update their grades
  const gradeStudents = filterStudents.map((student) => {
    // Find the corresponding grade for each student
    for (const gradeInfo of newGrades) {
      if (student.id === gradeInfo.studentId) {
        student.grade = gradeInfo.grade; // Update grade if found
      }
    }

    // If no grade is found, set grade to 'N/A'
    if (student.grade === undefined) {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }

    return student; // Return the student with updated grade
  });

  // Return the updated list of students
  return gradeStudents;
}
