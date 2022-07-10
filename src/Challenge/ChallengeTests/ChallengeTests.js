import './ChallengeTests.css';

const ChallengeTests = ({challenge, setChallenge}) => {

  console.log(challenge);

  return (
      <div>
        <div className="TestsHeader">
          <div>{challenge.current.label}</div>
          <div>{challenge.points.has} / {challenge.points.max}</div>
        </div>
        <div className="TestsContent">
          <div>{challenge.current.clue}</div>
          <div>{challenge.current.error}</div>
        </div>
        <button onClick={() => setChallenge()}>Lancer le test</button>
      </div>
  );
}
export default ChallengeTests