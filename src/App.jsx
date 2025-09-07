import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ErrorBoundary from './pages/ErrorBoundary';
import ToastProvider from './components/ui/ToastProvider';
import Fullpage from './pages/Fullpage';
import Login from './pages/Login';
import Slices from './pages/Slices';

function App() {
  return (
    <Router>
      <ToastProvider />
      <ErrorBoundary>
        <Layout>
          <Routes>
            {/* Fullpage composited experience at root */}
            <Route path="/" element={<Fullpage />} />

            {/* Keep standalone pages accessible (optional) */}
            <Route path="/home" element={<Home />} />
            <Route path="/slices" element={<Slices />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contatti" element={<Contact />} />

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;