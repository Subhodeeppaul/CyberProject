import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MainScreen from "../../../components/MainScreen";
import ErrorMessage from "../../../components/ErrorMessage";
import Loading from "../../../components/Loading";
import "./LoginScreen.css";
import {useHistory} from "react-router-dom";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate= useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      setLoading(false);
      navigate.push("/MovieStateCity");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <MainScreen title="LOGIN">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="custom-button" type="submit">
            Submit
          </button>
          
        </form>
      </MainScreen>
      <p>
        Don`t have an Account? <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
};

export default LoginScreen;
