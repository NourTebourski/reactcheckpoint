import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./components/Forms";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="title">
        <h1>Register now for the vaccination campaign</h1>
      </div>

      <Forms />
    </>
  );
}

export default App;
