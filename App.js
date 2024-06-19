import "./App.css";
import Address from "./Components/Address";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Practice Code</h1>
      <BrowserRouter>
        <div>
          <Link
            to="/"
            style={{
              color: "blueviolet",
              padding: "20px",
            }}
          >
            Home
          </Link>
          <Link to="/contact" style={{ color: "blueviolet", padding: "20px" }}>
            Contact
          </Link>
          <Link to="/address" style={{ color: "blueviolet", padding: "20px" }}>
            Adrress
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
