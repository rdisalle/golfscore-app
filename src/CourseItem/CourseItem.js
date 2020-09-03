import React, { Component } from 'react';
import './CourseItem.css';
import CoursePage from '../CoursePage/CoursePage';

class CourseItem extends Component {
  render() {
    const course = this.props.info
        .map((info, key) => <CoursePage {...info} key={key} />);
    return (
      <div>
        {course}
      </div>
    );
  }
}

CourseItem.defaultProps = {
  info: []
};

export default CourseItem;