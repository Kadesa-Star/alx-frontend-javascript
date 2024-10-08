export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  const filterStudents = students.filter(
    (student) => student.location === city,
  );

  // Map through the filtered students and update their grades
  const gradeStudents = filterStudents.map(
    (student) => {
      const studentGrade = newGrades.find((gradeInfo) => student.id === gradeInfo.studentId);

      // If a grade is found, assign it; otherwise, set it to 'N/A'
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    },
  );

  // Return the array of students with updated grades
  return gradeStudents;
}
