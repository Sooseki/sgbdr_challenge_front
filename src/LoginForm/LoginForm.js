import { useState } from 'react';
import {Form} from '../components/Form';

export default function LoginForm() {
  const [username, setUsername] = useState("David")
  const [userFamily, setUserFamily] = useState("Dehe")

  const handleForm = {
    q1: {
      question: 'nom de létudiant',
      tag: 'name'
    },
    q2: {
      question: 'prenom de létudiant',
      tag: 'username'
    }
  }
  return (
    <div className="LoginForm">
      <h1>Connexion</h1>
      <Form questions={handleForm} setUsername={setUsername}  setUserFamily={setUserFamily}/>
      <h1>{username}</h1>
    </div>
  );
}
