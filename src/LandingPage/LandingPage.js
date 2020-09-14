import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
        <main className='LandingPage'>
            <h1>Welcome to GolfScore</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum lorem a justo tempus vehicula. 
            Suspendisse condimentum efficitur vestibulum. Curabitur dignissim non nisi vitae lobortis. Praesent iaculis vehicula arcu, 
            elementum ornare enim tincidunt in.</p>
            <div>
              <Link to={'/view-course-list'} >
                  View Your Course List
              </Link>
            </div>
         </main>
    );
  }
}

export default LandingPage;