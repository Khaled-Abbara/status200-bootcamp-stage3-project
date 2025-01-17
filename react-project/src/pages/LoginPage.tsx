import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Announcement from "../components/Announcement";
import Navigation from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitState, setSubmitState] = useState(false);
  const [message, setMessage] = useState("");
  const navigateTo = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please fill in both fields");
      return;
    }

    setSubmitState(true);
  };

  useEffect(() => {
    if (submitState) {
      const fetchData = async () => {
        const response = await fetch(
          `http://localhost:3000/profile/login?username=${username}&password=${password}`
        );
        const result = await response.json();
        localStorage.setItem("userInfo", JSON.stringify(result));

        setMessage("Login successful!");
        setSubmitState(false);
        setUsername("");
        setPassword("");

        console.log(result);

        setTimeout(() => {
          navigateTo("/");
        }, 1000);
      };
      fetchData();
    }
  }, [submitState]);

  return (
    <>
      <Announcement key={uuidv4()} />
      <Navigation key={uuidv4()} />

      <div className="container m-5 d-flex justify-content-center">
        <div className="card p-5 col-md-4">
          <h4 className="card-title text-center mb-4">Welcome Back!</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="form-label w-100">
              Username:
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="example123..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label htmlFor="password" className="form-label w-100 mt-3">
              Password:
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="example123..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Login
            </button>
          </form>
          {message && <h2 className="alert alert-primary mt-3">{message}</h2>}
        </div>
      </div>

      <Footer key={uuidv4()} />
    </>
  );
}

export default Login;
