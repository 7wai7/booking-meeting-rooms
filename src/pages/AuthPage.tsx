import { useState, type FormEvent } from "react";
import "../styles/AuthPage.css";

type AuthData = {
  name: string;
  email: string;
  password: string;
};

export default function AuthPage() {
  const [isSignup, setSignup] = useState(true);
  const [authData, setAuthData] = useState<Partial<AuthData>>({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(authData);
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
          {isSignup && (
            <input
              type="text"
              id="regName"
              required
              placeholder="Name"
              value={authData?.name || ""}
              onChange={(e) =>
                setAuthData({ ...authData, name: e.target.value })
              }
            />
          )}
          <input
            type="email"
            id="regEmail"
            required
            placeholder="Email"
            value={authData?.email || ""}
            onChange={(e) =>
              setAuthData({ ...authData, email: e.target.value })
            }
          />
          <input
            type="password"
            id="regPassword"
            required
            placeholder="Password"
            value={authData?.password || ""}
            onChange={(e) =>
              setAuthData({ ...authData, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="submit-btn"
            disabled={
              isSignup
                ? !(authData.name && authData.email && authData.password) // signup
                : !(authData.email && authData.password) // login
            }
          >
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        {isSignup && (
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
        )}
      </div>
    </div>
  );
}
