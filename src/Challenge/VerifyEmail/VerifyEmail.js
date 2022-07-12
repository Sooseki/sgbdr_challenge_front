import { usePostApi } from "../../Api/Api";
import { useState, useEffect } from "react";
import { Form } from "../../components/Form";

const GetToken  = () => {
  const queryString = window.location.search;
	const searchParams = new URLSearchParams(queryString);
	const identityToken = searchParams.get('token');
  localStorage.setItem('token', identityToken);
	
  window.location.href = "/register";
	

	// const [data] = useState({
	// 	email: localStorage.getItem('email'),
	// 	token : identityToken
	// });

	// const [getValidity] = usePostApi("http://localhost:5050/verify/" + identityToken);

	// const useSubmit = async () => {
	// 	const postData = await getValidity(data);
	// 	console.log(postData);
	// 	localStorage.setItem('email', data.email);
	// 	// header.append('email', data.email )
	// 	// setSelectedMenu("login-form");
	// };
  // useSubmit();

	return (
		<div>
       
		</div>
	);
};
export default GetToken ;
