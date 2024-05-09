// En tu archivo App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Header/Navbar/navbar';
import { AppRouter } from './router/AppRouter';
import './style.css'

export default function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}
