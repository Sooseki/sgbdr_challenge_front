import { useGetApi } from "../Api/Api";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import SignUpForm from "./LoginForm/LoginForm";
import InstanceForm from "./InstanceForm/InstanceForm";
import ChallengeTests from "./ChallengeTests/ChallengeTests";


const Challenge = () => {
  // const [getChallenge, challenge, setChallenge] = useState([() => {}, '', '']);
  const [selectedMenu, setSelectedMenu] = useState("sign-in-form");
  const [userId, setUserId] = useState(localStorage.getItem("UserId"));
  const [instanceInfos, setInstanceInfos] = useState();

  useEffect(() => {
    // getChallenge()
  }, []);

  const switchComponentPart = selectedMenu => {
    switch (selectedMenu) {
      case "instance-form":
        return (
          <InstanceForm
            userId={userId}
            setSelectedMenu={setSelectedMenu}
            setInstanceInfos={setInstanceInfos}
          />
        );
      case "tests":
        return (
          <ChallengeTests
            instanceInfos={instanceInfos}
            setSelectedMenu={setSelectedMenu}
          />
        );
      default:
        return <InstanceForm />;
    }
  };

  return (
    <div>
      <Header setSelectedMenu={setSelectedMenu} />
      {selectedMenu && switchComponentPart(selectedMenu)}
    </div>
  );
};
export default Challenge;
