import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "./images/back.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/auth/login",
        {
          username: email,
          password: password,
        }
      );

      if (response.data.message === "Email not exists") {
        alert("Email does not exist");
      } else if (response.data.token) {
        navigate("/home");
      } else {
        console.log(response.data);
        // alert("Incorrect email and password combination");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        alert("Incorrect password");
      } else if (err.response.status === 404) {
        alert("Email does not exists");
      } else alert(err.message);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={login}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
