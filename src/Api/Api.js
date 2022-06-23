import { useState, useEffect } from "react";
export default function Api() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5050/admin/student`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(typeof(data))

  return (
    <div>
      <p>test</p>
      {/* {Object.keys(data.R).map((key, index) => { 
        <p>test</p>
      } */}
    </div>
  )

}