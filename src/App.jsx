import React from 'react';
import Home from './components/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Aquilaa Facility Management</title>
        <meta name="description" content="At Aquilaa Facility Management, we specialize in delivering comprehensive solutions for property maintenance and enhancement, aimed at maximizing functionality and aesthetics. Driven by a dedication to excellence, we offer personalized services meticulously crafted to address the distinct requirements of every client." />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
