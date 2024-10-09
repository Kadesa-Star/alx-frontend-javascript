// js/subjects/React.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number; // Using declaration merging
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingReact
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
  }
}
