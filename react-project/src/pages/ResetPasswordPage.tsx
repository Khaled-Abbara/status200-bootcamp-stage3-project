import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Footer from "../components/Footer";

function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [uniqueKey, setUniqueKey] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState(0);

  const handleSubmit = () => {
    setSubmitState(submitState + 1);
  };

  useEffect(() => {
    if (submitState === 1) {
      const fetchData = async () => {
        await fetch(`http://localhost:3000/profile/reset-password?email=${email}`);
      };
      fetchData();
    }

    if (submitState === 2) {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:3000/profile/reset-key?key=${uniqueKey}`);
        const result = await response.json();
        setSubmitState(0);

        if (result) {
          setMessage("Password changed successfully!");
        }
      };
      fetchData();
    }
  }, [submitState]);

  return (
    <>
      <div className="container m-5 d-flex justify-content-center">
        <div className="card p-5 col-md-4">
          <h4 className="card-title text-center mb-4">Reset Password:</h4>

          {submitState === 0 ? (
            <label htmlFor="username" className="form-label w-100">
              Email:
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="example123..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          ) : null}

          {submitState === 1 ? (
            <label htmlFor="username" className="form-label w-100">
              User Key:
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="example123..."
                value={uniqueKey}
                onChange={(e) => setUniqueKey(e.target.value)}
              />
            </label>
          ) : null}

          <button onClick={handleSubmit} className="btn btn-primary w-100 mt-4">
            Submit
          </button>
          {message && <h2 className="alert alert-primary mt-3">{message}</h2>}
        </div>
      </div>

      <Footer key={uuidv4()} />
    </>
  );
}

export default ResetPasswordPage;
