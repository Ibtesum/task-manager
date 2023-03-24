import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <body className="text-[#111827]">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
        </Router>
      </body>
    </>
  );
}

export default App;
