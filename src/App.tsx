import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={`App min-h-screen flex flex-col ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'
        : 'bg-gradient-to-br from-white via-gray-50 to-white text-gray-900'
    }`}>
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
