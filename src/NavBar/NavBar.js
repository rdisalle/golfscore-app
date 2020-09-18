import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="SearchBar_controls">
            <Link className="Nav_Link" to ="/">Golfscore</Link>
            {' '}
            <Link className="Nav_Link" to={'/view-course-list'} >
                View Courses
            </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;