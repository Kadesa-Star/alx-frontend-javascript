// 4-update_grade_by_city.js
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter the students who are located in the specified city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade object that matches the student's id
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      
      // Return the student object with the grade (or 'N/A' if no grade found)
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
