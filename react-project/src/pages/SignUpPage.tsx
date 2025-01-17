import { useEffect, useState } from "react";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [isUnique, setIsUnique] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitState, setSubmitState] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;

      const response = await fetch(
        `http://localhost:3000/check/username?name=${username}`
      );
      const result = await response.json();
      setIsUnique(result.exists);
    };
    fetchData();
  }, [username]);

  useEffect(() => {
    if (submitState) {
      const fetchData = async () => {
        const response = await fetch(
          `http://localhost:3000/profile/sign-up?username=${username}&email=${email}&password=${password}`
        );
        const result = await response.json();

        if (result.error) {
          setMessage(result.error);
        } else {
          setMessage("Sign up successful!");
        }

        setSubmitState(false);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        console.log(result);
      };
      fetchData();
    }
  }, [submitState]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!username || !password || !email || !confirmPassword) {
      setMessage("Please fill in all the fields");
      return;
    }

    setSubmitState(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Sign Up</h4>

              {message && <h2 className="alert alert-primary">{message}</h2>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    username:
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isUnique ? "text-success" : "text-danger"
                    }`}
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  {username.length > 0 ? (
                    isUnique ? (
                      <p className="text-success mt-2">Username is available</p>
                    ) : (
                      <p className="text-danger mt-2">
                        Username already exists
                      </p>
                    )
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>

              <div className="mt-3 text-center">
                <p>
                  Already have an account? <a href="/login">Login here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
