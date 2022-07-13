import { usePostApi } from "../Api/Api";
import { useState, useEffect } from "react";
import { Form } from "../components/Form";


const SignInForm = () => {
	const [data, setData] = useState({
		email: "dehe@dehe"
	});

	const handleForm = {
		q3: {
			question: "email de létudiant",
			tag: "email"
		}
	};

	const [getStudent] = usePostApi("http://localhost:5050/auth/email");

	const useSubmit = async () => {
		const postData = await getStudent(data);
		const header = new Headers();
		localStorage.setItem('email', data.email);
		// header.append('email', data.email )
		console.log(localStorage);
		alert("Un mail a été envoyé")
		
		// setSelectedMenu("login-form");
	};

	return (
		<div>
			<Form questions={handleForm} submit={useSubmit} setData={setData} />
		</div>
	);
};
export default SignInForm;
