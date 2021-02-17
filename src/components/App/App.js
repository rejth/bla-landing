import React from 'react';
import Header from '../Header';
import Brand from '../Brand';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';
import Shevron from '../Shevron';
import './App.scss';

const App = () => (
  <React.Fragment>
    <Header />
    <Brand />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
    <Shevron />
  </React.Fragment>
);

export default App;
