import './form.css';
import { useState } from "react";

export const Form = () => {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:5050/register/mt4/sgbdr", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
            "name_student": name,
            "first_name_student": email,
            "email_student": firstName,
            }),
           
          });
          
          let resJson = await res.json();
          console.log(resJson);
          if (res.status === 200) {
            setName("");
            setEmail("");
            setFirstName("");
            setMessage("User created successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className="App">
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
             <input
              type="text"
              value={firstName}
              placeholder="Firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
           
    
            <button type="submit">S'identifier</button>
    
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      );
}

{/* <input className='questions' type={questions[key].tag} onChange={(e) => setData(e.target.value)}/> */ }