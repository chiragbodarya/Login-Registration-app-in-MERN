import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("httmp://localhost:3001/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log("error", err));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 min-vh-100 bg-secondary bg-gradient">
        <div className="d-flex flex-column p-4 w-25 bg-light">
          <h1>Register</h1>
          <form action="" className="" onSubmit={handleSubmit}>
            <div className="w-100 pt-2">
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                name="Name"
                placeholder="Enter Name"
                className="w-100"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="w-100 pt-2">
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                name="Email"
                placeholder="Enter Email"
                className="w-100"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-100 pt-2">
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                name="Password"
                placeholder="Enter Password"
                className="w-100"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="w-100 bg-success mt-4 py-1">
              Rrgister
            </button>
          </form>
          <p>Already Have an Account !</p>
          <Link to="/">
            <button className="py-1 w-100">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default register;
