// Signup.js
import { useSignup } from "../hooks/useSignup"
import { useField } from "../hooks/useField"

const Signup = () => {
  const [email, handleEmailChange] = useField('');
  const [password, handlePasswordChange] = useField('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Email address:</label>
      <input type="email" onChange={handleEmailChange} value={email} />
      <label>Password:</label>
      <input type="password" onChange={handlePasswordChange} value={password} />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup;
