// Login.js
import { useLogin } from "../hooks/useLogin"
import { useField } from "../hooks/useField"

const Login = () => {
  const [email, handleEmailChange] = useField('');
  const [password, handlePasswordChange] = useField('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input type="email" onChange={handleEmailChange} value={email} />
      <label>Password:</label>
      <input type="password" onChange={handlePasswordChange} value={password} />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login;
