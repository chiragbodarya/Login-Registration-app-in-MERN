import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./component/signUp";
import Register from "./component/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
