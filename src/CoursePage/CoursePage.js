import React, { Component } from 'react';
import './CoursePage.css';
import { Link } from 'react-router-dom';

class CoursePage extends Component {
  render() {

    return (
      <div className="CourseItem">
        <Link to={`/course-page/${this.props.name}`}> 
          {this.props.name}
        </Link>
        <div className="courseInfo">
          <div className="CourseItem__location">{this.props.location}</div>
          <div className="CourseItem__courseDistance">{this.props.courseDistance}</div>
          <div className="CourseItem__par">{this.props.coursePar}</div>
          <div className="CourseItem__courseParHoleOne">{this.props.courseParHoleOne}</div>
          <div className="CourseItem__courseParHoleTwo">{this.props.courseParHoleTwo}</div>
          <div className="CourseItem__courseParHoleThree">{this.props.courseParHoleThree}</div>
          <div className="CourseItem__courseParHoleFour">{this.props.courseParHoleFour}</div>
          <div className="CourseItem__courseParHoleFive">{this.props.courseParHoleFive}</div>
          <div className="CourseItem__courseParHoleSix">{this.props.courseParHoleSix}</div>
          <div className="CourseItem__courseParHoleSeven">{this.props.courseParHoleSeven}</div>
          <div className="CourseItem__courseParHoleEight">{this.props.courseParHoleEight}</div>
          <div className="CourseItem__courseParHoleNine">{this.props.courseParHoleNine}</div>
          <div className="CourseItem__courseParHoleTen">{this.props.courseParHoleTen}</div>
          <div className="CourseItem__courseParHoleEleven">{this.props.courseParHoleEleven}</div>
          <div className="CourseItem__courseParHoleTwelve">{this.props.courseParHoleTwelve}</div>
          <div className="CourseItem__courseParHoleThirteen">{this.props.courseParHoleThirteen}</div>
          <div className="CourseItem__courseParHoleFourteen">{this.props.courseParHoleFourteen}</div>
          <div className="CourseItem__courseParHoleFifteen">{this.props.courseParHoleFifteen}</div>
          <div className="CourseItem__courseParHoleSixteen">{this.props.courseParHoleSixteen}</div>
          <div className="CourseItem__courseParHoleSeventeen">{this.props.courseParHoleSeventeen}</div>
          <div className="CourseItem__courseParHoleEighteen">{this.props.courseParHoleEighteen}</div>
          <div className="CourseItem__courseSummary">{this.props.courseSummary}</div>
          <div className="CourseItem__courseURL">{this.props.courseURL}</div>
        </div>
        <div className="CourseItem_commands">
          <Link to={'/edit-course-page'}>
                Edit Course
          </Link>
          <button>Delete</button>
          <Link to={'/add-score-page'}>
                Add Score
          </Link>
          <Link to={`/all-scores/${this.props.name}`}>
                View Scores
          </Link>
        </div>
      </div>
    );
  }
}

export default CoursePage;