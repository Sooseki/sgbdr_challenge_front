
import { useGetApi } from '../Api/Api'
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import LoginForm from './LoginForm/LoginForm';
import InstanceForm from './InstanceForm/InstanceForm';
import ChallengeTests from './ChallengeTests/ChallengeTests';

const Challenge = () => {

    const [getChallenge, challenge, setChallenge] = useGetApi("http://localhost:5050/admin/student/1")
    const [selectedMenu, setSelectedMenu] = useState('login-form');
    // const [challenge, setChallenge] = useState({
    //   id_challenge: 1,
    //   id_student: 1,
    //   points: {
    //     has: 4,
    //     max: 20
    //   },
    //   current: {
    //     number: 2,
    //     nb_points: 3,
    //     label: "Eh ouais ?",
    //     error: "Wallah c'est pas bon",
    //     clue: "Wallah trouve la solution"
    //   },
    //   passed: 1,
    // });

    useEffect(() => {
        getChallenge()
    }, []);

    const switchComponentPart = (selectedMenu) => {
      switch(selectedMenu){
        case "login-form":
          return <LoginForm />
        case "instance-form":
          return <InstanceForm />
        case "tests": 
          return <ChallengeTests challenge={challenge} setChallenge={setChallenge}/>
        default:
          return <LoginForm />
      }
    };

    return (
        <div>
          <Header setSelectedMenu={setSelectedMenu} />
          {challenge && selectedMenu && switchComponentPart(selectedMenu)}
        </div>
    );
}
export default Challenge