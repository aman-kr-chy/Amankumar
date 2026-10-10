import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const NotFound = () => (
  <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
    <h1 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem' }}>404</h1>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
    <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>The page you are looking for doesn't exist or has been moved.</p>
    <a href="/" className="btn btn-primary">Go Back Home</a>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
