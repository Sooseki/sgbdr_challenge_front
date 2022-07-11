import { usePostApi } from "../../Api/Api";
import { useState, useEffect } from "react";
import { Form } from "../../components/Form";

const LoginForm = ({ setSelectedMenu }) => {
  const [data, setData] = useState({
    name_student: "David",
    first_name_student: "Dehe",
    email_student: "dehe@dehe"
  });

  const handleForm = {
    q1: {
      question: "nom de létudiant",
      tag: "name_student"
    },
    q2: {
      question: "prénom de létudiant",
      tag: "first_name_student"
    },
    q3: {
      question: "email de létudiant",
      tag: "email_student"
    }
  };

  const [getStudent] = usePostApi("http://localhost:5050/auth/student");

  const useSubmit = async () => {
    const postData = await getStudent(data);
    setSelectedMenu("instance-form");
    console.log(postData);
  };

  return (
    <div>
      <Form questions={handleForm} submit={useSubmit} setData={setData} />
    </div>
  );
};
export default LoginForm;
