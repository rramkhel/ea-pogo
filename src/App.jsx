import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIRecommendations from './pages/AIRecommendations';
import Dashboard from './pages/Dashboard';
import Strategy from './pages/Strategy';
import Presentation from './pages/Presentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-recommendations" element={<AIRecommendations />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/presentation" element={<Presentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
