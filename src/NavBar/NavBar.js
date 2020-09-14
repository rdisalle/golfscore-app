import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="SearchBar__controls">
            <Link to ="/">Golfscore</Link>
            {' '}
            <Link to={'/view-course-list'} >
                View Your Course List
            </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;