import { usePostApi } from "../../Api/Api";
import { useState, useEffect } from "react";
import { Form } from "../../components/Form";

const SignInForm = ({ setSelectedMenu, setUserId }) => {
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
		setSelectedMenu("login-form");
	};

	return (
		<div>
			<Form questions={handleForm} submit={useSubmit} setData={setData} />
		</div>
	);
};
export default SignInForm;
