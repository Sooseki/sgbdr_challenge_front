import { useGetApi } from "../Api/Api";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import LoginForm from "./LoginForm/LoginForm";
import InstanceForm from "./InstanceForm/InstanceForm";
import ChallengeTests from "./ChallengeTests/ChallengeTests";

const Challenge = () => {
  // const [getChallenge, challenge, setChallenge] = useState([() => {}, '', '']);
  const [selectedMenu, setSelectedMenu] = useState("login-form");
  const [userId, setUserId] = useState();
  const [instanceInfos, setInstanceInfos] = useState();

  useEffect(() => {
    // getChallenge()
  }, []);

  const switchComponentPart = selectedMenu => {
    switch (selectedMenu) {
      case "login-form":
        return (
          <LoginForm setSelectedMenu={setSelectedMenu} setUserId={setUserId} />
        );
      case "instance-form":
        return (
          <InstanceForm
            userId={userId}
            setSelectedMenu={setSelectedMenu}
            setInstanceInfos={setInstanceInfos}
          />
        );
      case "tests":
        return <ChallengeTests />;
      default:
        return <LoginForm />;
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
