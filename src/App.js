import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NotesState from "./context/notes/NotesState";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <NotesState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/mynotebook" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NotesState>
  );
}

export default App;
