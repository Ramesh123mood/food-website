import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5002/api/v1/auth/register", {
        name: employeename,
        email: email,
        password: password,
      });
      alert("User Registration Successful");
      navigate("/login");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div style={{ marginTop: "4rem" }}>
      <div style={{ padding: "1rem", backgroundColor: "#f8f9fa" }}>
        <h1>User Registration</h1>
      </div>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form style={{ margin: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="employeename">User Name</label>
            <input
              type="text"
              className="form-control"
              id="employeename"
              placeholder="Enter Name"
              value={employeename}
              onChange={(event) => {
                setEmployeename(event.target.value);
              }}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
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
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
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
              style={{ width: "100%" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={save}
            style={{ marginTop: "1rem" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
