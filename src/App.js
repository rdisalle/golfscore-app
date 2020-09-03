import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../src/NavBar/NavBar'
import LandingPage from '../src/LandingPage/LandingPage'
import SignUpPage from '../src/SignUpPage/SignUpPage'
import ViewCourseList from '../src/ViewCourseList/ViewCourseList'
import CourseItem from '../src/CourseItem/CourseItem'



class App extends Component {
  render() {  
  return (
    <main className='App'>
      <NavBar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/sign-up-page" component={SignUpPage} />
      <Route path="/view-course-list" render={() => <ViewCourseList info={this.props.info} />} />
      <Route path="/course-page" render={() => <CourseItem info={this.props.info} />} />
    </main>
  );
  }
}

export default App;