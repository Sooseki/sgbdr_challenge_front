import "./Header.css";

const Header = ({ setSelectedMenu }) => {
  return (
    <div className="ChallengeHeader Register">
      <ul>
        <li onClick={() => setSelectedMenu("instance-form")}>VM</li>
        <li onClick={() => setSelectedMenu("tests")}>Challenge</li>
      </ul>
    </div>
  );
};
export default Header;
