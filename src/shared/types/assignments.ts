export interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  grade: number;
  maxGrade: number;
  template_code: string;
}

export interface AssignmentSubmission {
  id: number;
  assignmentId: number;
  studentId: number;
  submissionDate: Date;
  grade: number;
  code: string;
}
