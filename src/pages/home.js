import React from 'react';
import Intro from "../components/intro";
import './home.css';

function Home() {
  return (
    <>
    <div className='hero-container' >      
      <h1>Monitor</h1>
      <p>Plataforma para monitero de cultivos de caña de azúcar</p>      
    </div>
    <Intro />
    </>
  );
}
  
export default Home;