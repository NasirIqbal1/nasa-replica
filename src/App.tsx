import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NasaLive from "./pages/NasaLive";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nasa-plus" element={<NasaLive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

