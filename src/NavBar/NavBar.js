import React, { Component } from 'react';
import './NavBar.css';
import SignUpPage from '../SignUpPage/SignUpPage';
import ViewCourseList from '../ViewCourseList/ViewList';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar__heading">
          <h1>GolfScore</h1>
        </div>
        <div className="SearchBar__controls">
          <SignUpPage/>
          <ViewCourseList info={this.props.info}/>
        </div>
      </div>
    );
  }
}

export default NavBar;