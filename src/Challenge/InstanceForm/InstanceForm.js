import { usePostApi } from "../../Api/Api";
import { useState } from "react";
import { Form } from "../../components/Form";
import { apiUrl } from "../../helpers";

const InstanceForm = ({ userId, setSelectedMenu, setInstanceInfos }) => {
  let [data, setData] = useState({
    id_student: userId,
    id_challenge: 2,
    mark_student_challenge: 0,
    ip_student_instance_student_challenge: "",
    port_student_instance_student_challenge: userId,
    challenge_user_login_student_challenge: "",
    database_login: "",
    database_password: ""
  });

  const [getStudentChallenge] = usePostApi(
    apiUrl + "/admin/student?id="
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
      tag: "challenge_user_login_student_challenge"
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
