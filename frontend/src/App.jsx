import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import Research from './pages/Research';

// Protected Route component for students
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) return <Navigate to="/login" />;
  
  return children;
};

// Redirect if already logged in
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/research" element={<Research />} />
        <Route path="/signup" element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;