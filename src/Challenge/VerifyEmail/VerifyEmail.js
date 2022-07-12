import { usePostApi } from "../../Api/Api";

const GetToken = () => {
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    const identityToken = searchParams.get('token');

    const [Verify] = usePostApi("http://localhost:5050/verify/" + identityToken);
    function async() {
		Verify(identityToken);
		alert("Un mail a été envoyé")
	};
    async();
};

GetToken();

const VerifyEmail = () => {

  return (
    <div>
   
    </div>
  );
};
export default VerifyEmail;
