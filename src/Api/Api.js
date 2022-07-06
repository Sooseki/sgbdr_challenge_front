import { useState, useEffect } from "react";
export default function Api({ setApiCall, apiCall }) {

  useEffect(() => {
    fetch(`http://localhost:5050/admin/student`)
      .then((response) => response.json())
      .then((actualData) => setApiCall(actualData.rows))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  // return (
  //   <div>
  //     <p>test</p>
  //     <ul>
  //       {data.map(function (eachElement) {
  //         return ([
  //           <ul>
  //             <li>{eachElement.id_challenge}</li>
  //             <li>{eachElement.id_student}</li>
  //             <li>{eachElement.id_student}</li>
  //             <li>{eachElement.name_student}</li>
  //             <p>---------</p>
  //           </ul>
  //         ]);
  //       })}
  //     </ul>

  //   </div>
  // )

}