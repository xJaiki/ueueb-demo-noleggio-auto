import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Fullpage from './pages/Fullpage';
import DettaglioAuto from './pages/DettaglioAuto';
import NotFound from './pages/NotFound';
import ErrorBoundary from './pages/ErrorBoundary';
import ToastProvider from './components/ui/ToastProvider';

function App() {
  return (
    <Router>
      <ToastProvider />
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path="/" element={<Fullpage />} />
            <Route path="/flotta/:carId" element={<DettaglioAuto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;