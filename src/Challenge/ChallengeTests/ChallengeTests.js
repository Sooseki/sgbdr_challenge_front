import './ChallengeTests.css';

const ChallengeTests = ({challenge, setChallenge}) => {

  console.log(challenge);

  return (
    <div className="challengeTests">
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
  );
}
export default ChallengeTests