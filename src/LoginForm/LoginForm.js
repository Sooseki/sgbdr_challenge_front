import './LoginForm.css';
import { useState } from 'react';

export function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="LoginForm">
      <h1 className="LoginForm__title">Connexion</h1>
      <form>
        <input type="text" name="username" placeholder="Pseudo" value={this.state.value} onChange={this.setUsername} />
        <input type="password" name="password" placeholder="Mot de passe" value={this.state.value} onChange={this.setPassword} />
      </form>
    </div>
  );
}
