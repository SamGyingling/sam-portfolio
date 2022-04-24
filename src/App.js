import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout/Layout';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="my-work" element={<PortfolioPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
