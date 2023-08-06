import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";
import Loading from "../../../components/Loading";
import axios from "axios";
import "./RegisterScreen.css"; 
import {useHistory} from "react-router-dom";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const history= useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Password Not Matched");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const {data} = await axios.post(
          "http://localhost:5000/api/users",
          { name, email, password },
          config
        );
        console.log(data);
        setLoading(false);
        history.push("/login");
        //localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="registerContainer">
      <h2>REGISTER</h2>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
      {loading && <Loading />}
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email address</label>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email password</label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmpassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Have an Account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterScreen;
