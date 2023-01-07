import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Mission from './components/Mission/Mission';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Blog from './pages/Blog/Blog';
function App() {
  return (
    <>
    <Navbar/>
      <Header/>
      <Mission/>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
  
      </BrowserRouter>
   
    </>
  );
}

export default App;
