import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Works />}></Route>
          <Route path="/addWork" element={<AddWork />}></Route>
          <Route path="/update-work/:id" element={<AddWork />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
