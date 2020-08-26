import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'

function App() {
  return (
    <main className='App'>
      <NavBar info={this.props.info}/>
      <LandingPage />
    </main>
  );
}

export default App;