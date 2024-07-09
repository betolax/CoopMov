
import './App.css';
import './Works.css';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppFooter from './components/footer';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppContact from './components/contact';
import AppTeams from './components/teams';


function App() {
  return (
    <div className="App">
   <header id='header'>
    <AppHeader/>
   </header>
   <main>
        <AppHero />
        <AppAbout />
        <AppServices/>
        <AppWorks/>
        <AppContact/>
        <AppTeams/>
        <AppFooter/>
      </main>
    </div>


    
  );
}

export default App;
