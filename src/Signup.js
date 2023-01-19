import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const intialState = {
    email: "",
    password: "",
    cpassword: "",
  };

  const [signup, setSignup] = useState(intialState);
  const [error, setError] = useState({ color: "red", visibility: "hidden" });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    if (signup.password === signup.cpassword) {
      setError({ color: "red", visibility: "hidden" });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(signup);

    setError({ color: "red", visibility: "hidden" });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="inner_container">
        <h3>SignUp</h3>
        <form onSubmit={submitHandler}>
          <div className="box">
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={inputHandler}
              minLength="3"
              maxLength="64"
              multiple
            />
          </div>

          <div className="box">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={inputHandler}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </div>

          <div className="box">
            <input
              type="password"
              placeholder="Conform password"
              name="cpassword"
              onChange={inputHandler}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </div>

          <div className="box">
            <button type="submit">SignUp</button>
            <p>
              Already have account please{" "}
              <Link to="/">
                <b>Log In</b>
              </Link>{" "}
            </p>
          </div>
          <span style={error}>
            Error :password and Conform password didn't match
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
