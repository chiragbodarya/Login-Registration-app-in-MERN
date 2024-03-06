import React from "react";
import { Link } from "react-router-dom";

const signUp = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 min-vh-100 bg-secondary bg-gradient">
        <div className="d-flex flex-column p-4 w-25 bg-light">
          <h1>Login</h1>
          <form action="" className="">
            <div className="w-100 pt-2">
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                name="Email"
                placeholder="Enter Email"
                className="w-100"
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
              />
            </div>
            <button className="w-100 bg-success mt-4 py-1">Login</button>
          </form>
          <p>creat a new account !</p>
          <Link to='/register'>
            <button type="submit" className="w-100 py-1">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default signUp;
