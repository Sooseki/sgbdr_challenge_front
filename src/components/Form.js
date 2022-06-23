import './form.css';
import { useState } from "react";

export const Form = ({ questions, setData }) => {
    const [name, setName] = useState("");
    const [firstName, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:5050/register/:prom/:challenge", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              firstName: firstName,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setName("");
            setEmail("");
            setMobileNumber("");
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
              onChange={(e) => setMobileNumber(e.target.value)}
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