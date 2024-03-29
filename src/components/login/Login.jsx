import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices";
import formValidator from "../../utilities/validate";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [user, loading, error] = useAuthState(auth);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setCredentials({
      ...credentials,
      [e.target.name]: value,
    });
    if (
      credentials.email.trim().length !== 0 &&
      credentials.password.trim().length !== 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(credentials.email, credentials.password);
    navigate("/");
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/works");
  }, [user, loading]);

  console.log(credentials);
  console.log(disabled);

  return (
    <>
      <h2 className="mt-3 text-center">prisijungti</h2>
      <form className="form" onSubmit={submitHandle}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Jusu emailas"
            id="email"
            name="email"
            onChange={handleChange}
            value={credentials.email}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Jusu slaptazodis"
            id="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit" disabled={disabled}>
            Prisijungti
          </button>
        </div>
        <div className="mb-3">
          <p>
            Neturite paskyros? <Link to={"/register"}>Registruokites</Link>
          </p>
          <p>
            Nepavyksta prisijungti ?{" "}
            <Link to="/password-reset">Atstatyti slaptazodi</Link>{" "}
          </p>
        </div>
      </form>
    </>
  );
};
export default Login;
