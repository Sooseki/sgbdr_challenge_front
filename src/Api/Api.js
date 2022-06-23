import { useState, useEffect } from "react";
export default function Api() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:505/admin/student`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData.rows))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(typeof(data))
  console.log(data)

  return (
    <div>
      <p>test</p>
      {data.map(test => <h2>{test.id_challenge}</h2>)}
      {data.map(test => <h2>{test.id_student}</h2>)}
      {data.map(test => <h2>{test.mark_student_challenge}</h2>)}
    </div>
  )

}