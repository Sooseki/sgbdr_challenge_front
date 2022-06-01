import './LoginForm.css';

export function LoginForm() {
  return (
    <div className="LoginForm">
      <h1 className="LoginForm__title">Connexion</h1>
      <form>
        <input type="text" name="username" placeholder="Pseudo" />
        <input type="password" name="password" placeholder="Mot de passe" />
      </form>
    </div>
  );
}
