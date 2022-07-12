import './ChallengeTests.css';
import { useEffect, useState } from 'react'
import { useGetApi } from '../../Api/Api'

const ChallengeTests = ({ instanceInfos }) => {

  const [getChallenge, challenge, setChallenge] = useGetApi("http://localhost:5050/admin/student/" + instanceInfos);


  useEffect(() => {
    getChallenge()
  }, []);
  

  return (
    <div className="challengeTests">
      {/* <button className="challengeButton" onClick={() => aaaaaaa()}>Lancer le test</button> */}
      {challenge &&
        <div>
          <div className="TestsHeader">
            <div>{challenge[1].name}</div>
            <div>{challenge[1].points} / 20</div>
          </div>
          <div className="TestsContent">
            <div>Clue : {challenge[1].clue}</div>
            <div>Error : {challenge[1].error[0]}</div>
          </div>
          <button className="challengeButton" onClick={() => getChallenge()}>Lancer le test</button>
        </div>
      }
    </div>
  );
}
export default ChallengeTests