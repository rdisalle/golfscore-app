import React, { Component } from 'react';
import './ViewCourseList.css';
import CoursePage from '../CoursePage/CoursePage';
import { Link } from 'react-router-dom';

class ViewCourseList extends Component {
  render() {
    const list = this.props.info
        .map((info, key) => <CoursePage {...info} key={key} />);
    return (
      <div className="coursesPage">
        <div className="addCourse">
            <Link to={'/add-course-page'}>
                Add Course
            </Link>
        </div>
        <div className="ViewCourses">
          {list}
        </div>
      </div>
    );
  }
}

export default ViewCourseList;