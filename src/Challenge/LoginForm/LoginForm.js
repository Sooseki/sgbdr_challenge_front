import { useState } from 'react';
import { Form } from "../../components/Form";

const LoginForm = () => {
  let [data, setData] = useState({
    userName: 'David',
    familyName: 'Dehe',
  })

  const handleForm = {
    q1: {
      question: 'nom de létudiant',
      tag: 'familyName'
    },
    q2: {
      question: 'prenom de létudiant',
      tag: 'userName'
    }
  }

  return (
      <div>
        <Form questions={handleForm} setData={setData} />
      </div>
  );
}
export default LoginForm