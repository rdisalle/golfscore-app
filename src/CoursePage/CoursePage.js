import React, { Component } from 'react';
import './CoursePage.css';
import { Link } from 'react-router-dom';
import GolfContext from '../GolfContext';
import config from '../config';
import PropTypes from 'prop-types'

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
      course_url: ''
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
      <div className="CourseItem">
        <Link to={`/course-page/${id}`}> 
          {name}
        </Link>
        <div className="courseInfo">
          {name}
          {' '}
          {location}
          {' '}
          {course_distance}
          {' '}
          Par: {' '} {course_par}
          {' '}
          Hole:
          {' '}
          1: {' '} {course_par_hole_one}
          {' '}
          2: {' '} {course_par_hole_two}
          {' '}
          3: {' '} {course_par_hole_three}
          {' '}
          4: {' '} {course_par_hole_four}
          {' '}
          5: {' '} {course_par_hole_five}
          {' '}
          6: {' '} {course_par_hole_six}
          {' '}
          7: {' '} {course_par_hole_seven}
          {' '}
          8: {' '} {course_par_hole_eight}
          {' '}
          9: {' '} {course_par_hole_nine}
          {' '}
          10: {' '} {course_par_hole_ten}
          {' '}
          11: {' '} {course_par_hole_eleven}
          {' '}
          12: {' '} {course_par_hole_twelve}
          {' '}
          13: {' '} {course_par_hole_thirteen}
          {' '}
          14: {' '} {course_par_hole_fourteen}
          {' '}
          15: {' '} {course_par_hole_fifteen}
          {' '}
          16: {' '} {course_par_hole_sixteen}
          {' '}
          17: {' '} {course_par_hole_seventeen}
          {' '}
          18: {' '} {course_par_hole_eighteen}
          {' '}
          {course_summary}
          {' '}
          {course_url}
        </div>
        <div className="CourseItem_commands">
          <Link to={`/edit-course-page/${id}`}>
                Edit Course
          </Link>
          <button
            className='Course_Delete'
            type='button'
            onClick={this.handleClickDelete}
          >
            Delete
          </button>
          <Link to={`/add-score-page/${id}`}>
                Add Score
          </Link>
          <Link to={`/all-scores/${id}`}>
                View Scores
          </Link>
        </div>
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
};

export default CoursePage;