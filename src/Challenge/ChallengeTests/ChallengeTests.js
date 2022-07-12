import './ChallengeTests.css';
import { useEffect } from 'react'
import { useGetApi } from '../../Api/Api'
import { apiUrl } from '../../helpers';

const ChallengeTests = ({ instanceInfos }) => {

  console.log(instanceInfos);
  const [getChallenge, challenge, setChallenge] = useGetApi(apiUrl + "/admin/student/" + instanceInfos);
  
  useEffect(() => {
    getChallenge()
  }, [challenge]);

  return (
    <div className="challengeTests">
      {challenge &&
        <div>
          <div className="TestsHeader">
            <div>{challenge.current.label}</div>
            <div>{challenge.points.has} / {challenge.points.max}</div>
          </div>
          <div className="TestsContent">
            <div>Clue : {challenge.current.clue}</div>
            <div>Error : {challenge.current.error}</div>
          </div>
          <button className="challengeButton" onClick={() => setChallenge()}>Lancer le test</button>
        </div>
      }
    </div>
  );
}
export default ChallengeTests