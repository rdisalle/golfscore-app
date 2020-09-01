import React, { Component } from 'react';
import './ViewCourseList.css';
import CourseItem from '../CourseItem/CourseItem';

class ViewCourseList extends Component {
  render() {
    const list = this.props.info
        .map((info, key) => <CourseItem {...info} key={key} />);
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