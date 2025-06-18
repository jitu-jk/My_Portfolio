import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from "./components/MainContent";
import PortfolioDetail from "./components/PortfolioDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
    </Router>
  );
}

export default App;