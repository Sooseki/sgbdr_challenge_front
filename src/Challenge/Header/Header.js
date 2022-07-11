import './Header.css';

const Header = ({setSelectedMenu}) => {

  return (
    <div className="ChallengeHeader">
      <ul>
        <li onClick={() => setSelectedMenu('login-form')}>Inscription</li>
        <li onClick={() => setSelectedMenu('sign-in-form')}>Connexion</li>
        <li onClick={() => setSelectedMenu('instance-form')}>VM</li>
        <li onClick={() => setSelectedMenu('tests')}>Challenge</li>
      </ul>
    </div>
  );
}
export default Header