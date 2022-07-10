import { useState } from 'react';
import { Form } from '../../components/Form';

const InstanceForm = () => {

  let [data, setData] = useState({
    userName: 'David',
    familyName: 'Dehe',
  })

  const handleForm = {
    q1: {
      question: 'ip de la VM',
      tag: 'instance_ip'
    },
    q2: {
      question: 'utilisateur VM',
      tag: 'instanceUserName'
    },
    q3: {
      question: 'utilisateur BDD',
      tag: 'dbUserName'
    },
    q4: {
      question: 'mot de passe BDD',
      tag: 'dbPassword'
    }
  }

  return (
      <div>
        <Form questions={handleForm} setData={setData} />
      </div>
  );
}
export default InstanceForm