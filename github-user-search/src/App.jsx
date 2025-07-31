import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/Search";
import "./index.css"; // Ensure Tailwind CSS is imported
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/search" element={<Search />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
