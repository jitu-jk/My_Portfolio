import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from "./components/MainContent";
import PortfolioDetail from "./components/PortfolioDetail";

// Dynamically set basename for GitHub Pages, root for Netlify/Vercel/local
const isGithubPages = window.location.hostname.includes('github.io');
const basename = isGithubPages ? '/My_Portfolio' : undefined;

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
    </Router>
  );
}

export default App;