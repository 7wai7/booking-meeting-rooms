import { useState, type FormEvent } from "react";
import "../styles/AuthForm.css";

type AuthData = {
  name: string;
  email: string;
  password: string;
};

export default function AuthForm() {
  const [isSignup, setSignup] = useState(true);
  const [authData, setAuthData] = useState<Partial<AuthData>>({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="auth-card">
      <div className="left">
        <h1>Meeting Room Booking App</h1>
        <p>Registration and booking management.</p>
      </div>
      <div className="right">
        <h3>{isSignup ? "Signup" : "Login"}</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="regName"
            required
            value={authData?.name || ""}
            onChange={(e) => setAuthData({ name: e.target.value })}
          />
          <input
            type="email"
            id="regEmail"
            required
            value={authData?.email || ""}
            onChange={(e) => setAuthData({ email: e.target.value })}
          />
          <input
            type="password"
            id="regPassword"
            required
            value={authData?.password || ""}
            onChange={(e) => setAuthData({ password: e.target.value })}
          />
          <button type="submit" className="submit-btn">{isSignup ? "Signup" : "Login"}</button>
        </form>
        <p className="bottom">
          Already have an account?
          <button
            className="login-btn"
            type="button"
            onClick={() => setSignup(false)}
          >
            Login.
          </button>
        </p>
      </div>
    </div>
  );
}
