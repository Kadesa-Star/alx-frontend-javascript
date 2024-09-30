export default function createIteratorObject(report) {
  const employees = [];
  
  // Iterate through each department in the report
  for (const department in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, department)) {
      // Push each employee into the employees array
      employees.push(...report.allEmployees[department]);
    }
  }
  
  // Return an iterator for the employees array
  return employees.values();
}
