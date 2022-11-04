import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
