import { usePostApi } from "../../Api/Api";
import { useState, useEffect } from "react";
import { Form } from "../../components/Form";

const SignInForm = ({ setSelectedMenu, setUserId }) => {
	const [data, setData] = useState({
		email_student: "dehe@dehe"
	});

	const handleForm = {
		q3: {
			question: "email de létudiant",
			tag: "email_student"
		}
	};

	const [getStudent] = usePostApi("http://localhost:5050/auth/student");

	const useSubmit = async () => {
		const postData = await getStudent(data);
		setSelectedMenu("instance-form");
		setUserId(postData.data.id);
	};

	return (
		<div>
			<Form questions={handleForm} submit={useSubmit} setData={setData} />
		</div>
	);
};
export default SignInForm;
