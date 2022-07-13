import './ChallengeTests.css';
import { useEffect, useState } from 'react'
import { useGetApi } from '../../Api/Api'
import { apiUrl } from '../../helpers';

const ChallengeTests = ({ instanceInfos, setSelectedMenu }) => {

  const [getChallenge, challenge, setChallenge] = useGetApi(apiUrl + "/admin/student/" + instanceInfos);
  
  useEffect(() => {
    getChallenge()
  }, []);

  console.log(challenge)
  return (
    <div className="challengeTests">
      {/* <button className="challengeButton" onClick={() => aaaaaaa()}>Lancer le test</button> */}

      {challenge ? challenge[1] && !challenge[1].code ? 
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
      : setSelectedMenu('instance-form') : ''}
    </div>
  );
}
export default ChallengeTests