import React from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import GlobalStyle from './GlobalStyle';

  
function App() {
  return (
    <>
      <Nav></Nav>
      <Hero />
      <div style={{background: '#1E1E24', height: 3000 + 'px'}}></div>
      <GlobalStyle/>
    </>
  );
}

export default App;
