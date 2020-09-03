import React, { Component } from 'react';
import './ViewCourseList.css';
import CoursePage from '../CoursePage/CoursePage';

class ViewCourseList extends Component {
  render() {
    const list = this.props.info
        .map((info, key) => <CoursePage {...info} key={key} />);
    return (
      <div className="ViewCourses">
        {list}
      </div>
    );
  }
}

ViewCourseList.defaultProps = {
  info: []
};

export default ViewCourseList;