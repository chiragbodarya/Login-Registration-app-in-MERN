import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./component/signUp";
import Register from "./component/register";
import Home from "./component/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignUp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
