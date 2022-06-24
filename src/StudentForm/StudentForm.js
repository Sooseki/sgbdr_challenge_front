import { Component } from "react";
import { useState } from "react";
import { Form } from "../components/Form";

export default function StudentForm() {
  let [data, setData] = useState({
    userName: "David",
    familyName: "Dee",
    email: "david@david.david"
  });
  console.log(data);

  const handleForm = {
    q1: {
      question: "nom de létudiant",
      tag: "familyName"
    },
    q2: {
      question: "prenom de létudiant",
      tag: "userName"
    },
    q3: {
      question: "email",
      tag: "email"
    }
  };
  // console.log(typeof(data))
  return (
    <div className="StudentForm">
      <h1>Connexion</h1>
      <Form questions={handleForm} setData={setData} />
    </div>
  );
}
