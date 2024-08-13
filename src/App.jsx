import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <Profile />
      <Login />
      <ChangeColor />
    </>
  );
}

export default App;
