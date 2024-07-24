
import './App.css';
import './Works.css';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Routes, Route, Link} from 'react-router-dom';

import React from 'react';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppFooter from './components/footer';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppContact from './components/contact';
import AppTeams from './components/teams';
import Logos from './components/Logos';


function App() {
  return (
    
    <div className="App">
    <header id='header'>
     <AppHeader/>
     
    </header>
    <main>

        <Routes>
          <Route path="/" element={<AppHero/> }/>
          <Route exact path="/about"  element={<AppAbout/>}/>
          <Route exact path="/services"  element={<AppServices/>}/>
          <Route exact path="/works"  element={<AppWorks/>}/>
          <Route exact path="/teams"  element={<AppTeams/>}/>
          <Route exact path="/contact"  element={<AppContact/>}/>
          <Route exact path="/Logos"  element={<Logos/>}/>
       
          
        </Routes>
        </main>
        <footer>
        <AppFooter/>
        </footer>
    </div>

    
  );
}

export default App;
/*
 <AppHero />
        <AppAbout />
        <AppServices/>
        <AppWorks/> 
        <AppTeams/>
        <AppContact/>
      




*/