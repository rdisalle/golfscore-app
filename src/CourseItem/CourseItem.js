import React, { Component } from 'react';
import './CourseItem.css';
import CoursePage from '../CoursePage/CoursePage';
import GolfContext from '../GolfContext';
import PropTypes from 'prop-types';

class CourseItem extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = GolfContext;

  onDelete = () => {
    this.props.history.push('/view-course-list');
  };

  findCourse = (courses=[], courseId) =>
  courses.find(course => course.id === JSON.parse(courseId));

  render() {
    const { courses } = this.context;
    const { courseId } = this.props.match.params;
    const course = this.findCourse(courses, courseId) || { content: '' };

    return (
      <section className="CourseItem">
            <CoursePage
              id={course.id}
              name={course.name}
              location={course.location}
              course_distance={course.course_distance}
              course_par={course.course_par}
              course_par_hole_one={course.course_par_hole_one}
              course_par_hole_two={course.course_par_hole_two}
              course_par_hole_three={course.course_par_hole_three}
              course_par_hole_four={course.course_par_hole_four}
              course_par_hole_five={course.course_par_hole_five}
              course_par_hole_six={course.course_par_hole_six}
              course_par_hole_seven={course.course_par_hole_seven}
              course_par_hole_eight={course.course_par_hole_eight}
              course_par_hole_nine={course.course_par_hole_nine}
              course_par_hole_ten={course.course_par_hole_ten}
              course_par_hole_eleven={course.course_par_hole_eleven}
              course_par_hole_twelve={course.course_par_hole_twelve}
              course_par_hole_thirteen={course.course_par_hole_thirteen}
              course_par_hole_fourteen={course.course_par_hole_fourteen}
              course_par_hole_fifteen={course.course_par_hole_fifteen}
              course_par_hole_sixteen={course.course_par_hole_sixteen}
              course_par_hole_seventeen={course.course_par_hole_seventeen}
              course_par_hole_eighteen={course.course_par_hole_eighteen}
              course_summary={course.course_summary}
              course_url={course.course_url}
              delete= {this.onDelete}
            />
      </section>
    );
  };
};

CourseItem.propTypes = {
  match: PropTypes.object
};

export default CourseItem;