import React from 'react';
import Header from '../Header';
import Brand from '../Brand';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';
import './App.scss';

const App = () => (
  <React.Fragment>
    <Header />
    <Brand />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </React.Fragment>
);

export default App;
