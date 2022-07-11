import { usePostApi } from '../../Api/Api'
import { useState, useEffect } from 'react';
import { Form } from "../../components/Form";

const LoginForm = () => {
  const [data, setData] = useState({
    name_student: 'David',
    email_student: 'dehe@dehe'
  })

  const handleForm = {
    q1: {
      question: 'nom de létudiant',
      tag: 'name_student'
    },
    q2: {
      question: 'email de létudiant',
      tag: 'email_student'
    }
  }
  
  const [getStudent] = usePostApi('http://localhost:5050/admin/student')

  const useSubmit = async() => {
    console.log(getStudent)
    const postData = await getStudent(data)
    console.log(postData)
  }

  return (
      <div>
        <Form questions={handleForm} submit={useSubmit} setData={setData} />
      </div>
  );
}
export default LoginForm