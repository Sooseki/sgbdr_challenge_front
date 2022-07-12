import { useState } from 'react';
import { Form } from '../components/Form';

export default function LoginForm() {
  let [data, setData] = useState({
    userName: 'David',
    familyName: 'Dehe',
  })
  console.log(data)

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
  // console.log(typeof(data))
  return (
    <div className="LoginForm">
      <h1>Connexion</h1>
      <Form questions={handleForm} setData={setData} />
    </div>
  );
}
