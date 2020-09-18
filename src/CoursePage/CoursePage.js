import React, { Component } from 'react';
import './CoursePage.css';
import { Link } from 'react-router-dom';
import GolfContext from '../GolfContext';
import config from '../config';
import PropTypes from 'prop-types';

class CoursePage extends Component {
    static defaultProps = {
      name: '',
      location: '',
      course_distance: '',
      course_par: '',
      course_par_hole_one: '',
      course_par_hole_two: '',
      course_par_hole_three: '',
      course_par_hole_four: '',
      course_par_hole_five: '',
      course_par_hole_six: '',
      course_par_hole_seven: '',
      course_par_hole_eight: '',
      course_par_hole_nine: '',
      course_par_hole_ten: '',
      course_par_hole_eleven: '',
      course_par_hole_twelve: '',
      course_par_hole_thirteen: '',
      course_par_hole_fourteen: '',
      course_par_hole_fifteen: '',
      course_par_hole_sixteen: '',
      course_par_hole_seventeen: '',
      course_par_hole_eighteen: '',
      course_summary: '',
      course_url: '',
    }
  
    static contextType = GolfContext;
  
    handleClickDelete = e => {
      e.preventDefault()
      const courseId = this.props.id;
  
      fetch(`${config.API_ENDPOINT}/api/courses/${courseId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return 
        })
        .then(() => {
          this.context.deleteCourse(courseId)
          this.props.delete()
        })
        .catch(error => {
          console.error({ error })
        })
    }

    render() {
      const { id, name, location, course_distance, course_par, course_par_hole_one, course_par_hole_two,
      course_par_hole_three, course_par_hole_four, course_par_hole_five, course_par_hole_six, 
      course_par_hole_seven, course_par_hole_eight, course_par_hole_nine, course_par_hole_ten, 
      course_par_hole_eleven, course_par_hole_twelve, course_par_hole_thirteen, course_par_hole_fourteen,
      course_par_hole_fifteen, course_par_hole_sixteen, course_par_hole_seventeen, course_par_hole_eighteen,
      course_summary, course_url } = this.props
    return (
      <div className="CoursePage_item">
        <div className="courseInfo">
          <ul className="CourseInfo_list">
            <li className="CoursePage_name">
            {name}
            </li>
            <li className="CoursePage_location">
            {location}
            </li>
            <li className="CoursePage_distance">
            {course_distance}
            </li>
            <li>
            Par: {' '} {course_par}
            </li>
            <li className="CoursePage_holeLabel">
            Hole:
            </li>
            <li className="CoursePage_hole">
            1) {' '} {course_par_hole_one}
            </li>
            <li className="CoursePage_hole">
            2) {' '} {course_par_hole_two}
            </li>
            <li className="CoursePage_hole">
            3) {' '} {course_par_hole_three}
            </li>
            <li className="CoursePage_hole">
            4) {' '} {course_par_hole_four}
            </li>
            <li className="CoursePage_hole">
            5) {' '} {course_par_hole_five}
            </li>
            <li className="CoursePage_hole">
            6) {' '} {course_par_hole_six}
            </li>
            <li className="CoursePage_hole">
            7) {' '} {course_par_hole_seven}
            </li>
            <li className="CoursePage_hole">
            8) {' '} {course_par_hole_eight}
            </li>
            <li className="CoursePage_hole">
            9) {' '} {course_par_hole_nine}
            </li>
            <li className="CoursePage_hole">
            10) {' '} {course_par_hole_ten}
            </li>
            <li className="CoursePage_hole">
            11) {' '} {course_par_hole_eleven}
            </li>
            <li className="CoursePage_hole">
            12) {' '} {course_par_hole_twelve}
            </li>
            <li className="CoursePage_hole">
            13) {' '} {course_par_hole_thirteen}
            </li>
            <li className="CoursePage_hole">
            14) {' '} {course_par_hole_fourteen}
            </li>
            <li className="CoursePage_hole">
            15) {' '} {course_par_hole_fifteen}
            </li>
            <li className="CoursePage_hole">
            16) {' '} {course_par_hole_sixteen}
            </li>
            <li className="CoursePage_hole">
            17) {' '} {course_par_hole_seventeen}
            </li>
            <li className="CoursePage_hole">
            18) {' '} {course_par_hole_eighteen}
            </li>
            <li className="CoursePage_summary">
            {course_summary}
            </li>
            <li>
            <a className="CoursePage_url" href={course_url} target="_blank" rel="noopener noreferrer">
            {course_url}
            </a>
            </li>
            </ul>
        </div>
        <div className="CourseItem_commands">
          <Link className="CourseItem_Link" to={`/edit-course-page/${id}`}>
                Edit Course
          </Link>
          <Link className="CourseItem_Link" to={`/add-score-page/${id}`}>
                Add Score
          </Link>
          <Link className="CourseItem_Link" to={`/all-scores/${id}`}>
                View Scores
          </Link>
        </div>
        <button
            className="Course_Delete"
            type='button'
            onClick={this.handleClickDelete}
          >
            Delete
          </button>
      </div>
    );
  }
}

CoursePage.propTypes = {
  id: PropTypes.number,
  onDeleteCourse: PropTypes.func,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  course_distance: PropTypes.string.isRequired,
  course_par: PropTypes.string.isRequired,
  course_par_hole_one: PropTypes.string.isRequired,
  course_par_hole_two: PropTypes.string.isRequired,
  course_par_hole_three: PropTypes.string.isRequired,
  course_par_hole_four: PropTypes.string.isRequired,
  course_par_hole_five: PropTypes.string.isRequired,
  course_par_hole_six: PropTypes.string.isRequired,
  course_par_hole_seven: PropTypes.string.isRequired,
  course_par_hole_eight: PropTypes.string.isRequired,
  course_par_hole_nine: PropTypes.string.isRequired,
  course_par_hole_ten: PropTypes.string.isRequired,
  course_par_hole_eleven: PropTypes.string.isRequired,
  course_par_hole_twelve: PropTypes.string.isRequired,
  course_par_hole_thirteen: PropTypes.string.isRequired,
  course_par_hole_fourteen: PropTypes.string.isRequired,
  course_par_hole_fifteen: PropTypes.string.isRequired,
  course_par_hole_sixteen: PropTypes.string.isRequired,
  course_par_hole_seventeen: PropTypes.string.isRequired,
  course_par_hole_eighteen: PropTypes.string.isRequired,
  course_summary: PropTypes.string.isRequired,
  course_url: PropTypes.string.isRequired,
  date_modified: PropTypes.string
};

export default CoursePage;