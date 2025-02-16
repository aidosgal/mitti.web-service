import CodeEditor from "@/shared/components/assignment/code_editor";
import ProblemStatement from "@/shared/components/assignment/problem_statement";
import NavBar from "@/shared/components/layout/navbar";

const AssignmentDetail = ({ params }: { params: { assignment_uid: string } }) => {
  const uid = params.assignment_uid
  console.log(uid)

  return (
    <NavBar>
    <div className="grid grid-cols-2">
      <CodeEditor />
      <ProblemStatement />
    </div>
    </NavBar>
  );
};

export default AssignmentDetail;

