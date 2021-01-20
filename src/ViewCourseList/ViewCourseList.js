import React, { Component } from 'react';
import './ViewCourseList.css';
import CoursePage from '../CoursePage/CoursePage';
import { Link } from 'react-router-dom';
import GolfContext from '../GolfContext';
import PropTypes from 'prop-types';

class ViewCourseList extends Component {

  static contextType = GolfContext;

  countScoresForCourse = (scores=[], courseId) =>
  scores.filter(score => score.course_id === courseId).length;

  onDelete = () => {
    this.props.history.push('/view-course-list');
  };

  render() {
    const { courses=[], scores=[] } = this.context;
    return (
      <div className="ViewCourseList">
        <Link className="ViewCourseList_link" to={'/add-course-page'}>
          Add Course
        </Link>
        <ul className="ViewCourseList_list">
          {courses.map(course =>
            <li className="ViewCourseList_course" key={course.id}> 
              <Link
                className="ViewCourseList_course-link"
                to={`/course-page/${course.id}`}
              >
                {course.name}
              </Link>
              <CoursePage className="CourseList_data"
                id={course.id}
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
              <div className="ViewCourseList_score">
              <span className="ViewCourseList_num-scores">
                  Scores: ({this.countScoresForCourse(scores, course.id)})
              </span>
          </div>
            </li>
          )
        </ul>
      </div>
    );
  };
};

ViewCourseList.propTypes = {
  history: PropTypes.object
};

export default ViewCourseList;