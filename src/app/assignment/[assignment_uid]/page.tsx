import CodeEditor from "@/shared/components/assignment/code_editor";
import ProblemStatement from "@/shared/components/assignment/problem_statement";

const AssignmentDetail = ({ params }: { params: { assignment_uid: string } }) => {
  const uid = params.assignment_uid
  console.log(uid)

  return (
    <div className="grid grid-cols-2">
      <CodeEditor />
      <ProblemStatement />
    </div>
  );
};

export default AssignmentDetail;

