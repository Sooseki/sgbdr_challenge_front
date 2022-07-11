import { usePostApi } from "../../Api/Api";
import { useState } from "react";
import { Form } from "../../components/Form";

const InstanceForm = ({ userId, setSelectedMenu }) => {
  let [data, setData] = useState({
    ip_student_instance_student_challenge: "",
    challenge_user_login_student_challenge: "",
    database_login: "",
    database_password: ""
  });

  const [getStudentChallenge] = usePostApi(
    "http://localhost:5050/admin/student?id=" + userId
  );

  const useSubmit = async () => {
    const postData = await getStudentChallenge(data);
    setSelectedMenu("tests");
    setInstanceInfos(postData.data.id);
  };

  const handleForm = {
    q1: {
      question: "ip de la VM",
      tag: "ip_student_instance_student_challenge"
    },
    q2: {
      question: "utilisateur VM",
      tag: "instancechallenge_user_login_student_challengeUserName"
    },
    q3: {
      question: "utilisateur BDD",
      tag: "database_login"
    },
    q4: {
      question: "mot de passe BDD",
      tag: "database_password"
    }
  };

  return (
    <div>
      <Form questions={handleForm} submit={useSubmit} setData={setData} />
    </div>
  );
};
export default InstanceForm;
