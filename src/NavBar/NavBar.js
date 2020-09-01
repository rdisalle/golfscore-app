import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar__heading">
          <h1>GolfScore</h1>
        </div>
        <div className="SearchBar__controls">
            <Link to={'/sign-up-page'}>
                Sign Up
            </Link>
            {' '}
            <Link to={'/view-course-list'} info={this.props.info}>
                View Your Course List
            </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;