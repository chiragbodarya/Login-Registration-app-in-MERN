import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    id: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setNewUser({ ...newUser, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post("httmp://localhost:3001/register", { name, email, password })
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log("error", err));
    console.log(newUser);
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
                name="name"
                placeholder="Enter Name"
                className="w-100"
                value={newUser.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-100 pt-2">
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-100"
                value={newUser.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-100 pt-2">
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-100"
                value={newUser.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-100 bg-success mt-4 py-1">
              Rrgister
            </button>
          </form>
          <p>Already Have an Account !</p>
          <Link to="/login">
            <button className="py-1 w-100">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default register;
