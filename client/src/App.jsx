import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/AuthFiles/Signup";
import Login from "./Pages/AuthFiles/Login";
import Popup from "./Pages/AuthFiles/Popup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/popup" element={<Popup />} />
    </Routes>
  );
}

export default App;
