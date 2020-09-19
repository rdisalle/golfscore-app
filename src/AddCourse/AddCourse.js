import React, { Component } from 'react';
import './AddCourse.css';
import config from '../config';
import GolfContext from '../GolfContext';
import PropTypes from 'prop-types';

class AddCourse extends Component {
    static contextType = GolfContext

    addNewCourse = course => {    
        fetch(`${config.API_ENDPOINT}/api/courses/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(course),
        })
          .then(res => {
            console.log(JSON.stringify(course))
            return res.json()
          })
          .then(resJSON => this.context.addCourse(resJSON))
          .catch(error => {
            console.error({ error })
            return "There was an error with the request. Try again later."
          })
      }

    handleFormSubmit = e => {
        e.preventDefault(e)
        const newCourse = {
            name: e.target.name.value,
            location: e.target.location.value,
            course_distance: e.target.course_distance.value,
            course_par: e.target.course_par.value,
            course_par_hole_one: e.target.course_par_hole_one.value,
            course_par_hole_two: e.target.course_par_hole_two.value,
            course_par_hole_three: e.target.course_par_hole_three.value,
            course_par_hole_four: e.target.course_par_hole_four.value,
            course_par_hole_five: e.target.course_par_hole_five.value,
            course_par_hole_six: e.target.course_par_hole_six.value,
            course_par_hole_seven: e.target.course_par_hole_seven.value,
            course_par_hole_eight: e.target.course_par_hole_eight.value,
            course_par_hole_nine: e.target.course_par_hole_nine.value,
            course_par_hole_ten: e.target.course_par_hole_ten.value,
            course_par_hole_eleven: e.target.course_par_hole_eleven.value,
            course_par_hole_twelve: e.target.course_par_hole_twelve.value,
            course_par_hole_thirteen: e.target.course_par_hole_thirteen.value,
            course_par_hole_fourteen: e.target.course_par_hole_fourteen.value,
            course_par_hole_fifteen: e.target.course_par_hole_fifteen.value,
            course_par_hole_sixteen: e.target.course_par_hole_sixteen.value,
            course_par_hole_seventeen: e.target.course_par_hole_seventeen.value,
            course_par_hole_eighteen: e.target.course_par_hole_eighteen.value,
            course_summary: e.target.course_summary.value,
            course_url: e.target.course_url.value,
        }
        console.log(newCourse);
        this.addNewCourse(newCourse)
        this.props.history.push('/view-course-list');
    }  

    handleClickCancel = () => {
        this.props.history.push('/view-course-list')
      };

    render() {
    return (
      <div className="AddCoursePage">
        <div className="AddCoursePage__heading">
          <h1>Add Course</h1>
        </div>
        <form 
            className="AddCourseForm"
            onSubmit={e => this.handleFormSubmit(e)}
        >
          <div>
            <label htmlFor="name">
                Name:
                {this.context.newCourse.name.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="name"
                id="name"
                required={true}
                aria-label="Name"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.name, e.target.value)
                }
            />
          </div>
          <div>
            <label  htmlFor="location">
                Location:
                {this.context.newCourse.location.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="location"
                id="location"
                required={true}
                aria-label="location"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.location, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_distance">
                Course Distance:
                {this.context.newCourse.course_distance.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_distance"
                id="course_distance"
                required={true}
                aria-label="course_distance"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_distance, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par">
                Course Par:
                {this.context.newCourse.course_par.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par"
                id="course_par"
                required={true}
                aria-label="course_par"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_one">
                Hole One Par:
                {this.context.newCourse.course_par_hole_one.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_one"
                id="course_par_hole_one"
                required={true}
                aria-label="course_par_hole_one"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_one, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_two">
                Hole Two Par:
                {this.context.newCourse.course_par_hole_two.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_two"
                id="course_par_hole_two"
                required={true}
                aria-label="course_par_hole_two"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_two, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_three">
                Hole Three Par:
                {this.context.newCourse.course_par_hole_three.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_three"
                id="course_par_hole_three"
                required={true}
                aria-label="course_par_hole_three"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_three, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_four">
                Hole Four Par:
                {this.context.newCourse.course_par_hole_four.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_four"
                id="course_par_hole_four"
                required={true}
                aria-label="course_par_hole_four"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_four, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_five">
                Hole Five Par:
                {this.context.newCourse.course_par_hole_five.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_five"
                id="course_par_hole_five"
                required={true}
                aria-label="course_par_hole_five"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_five, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_six">
                Hole Six Par:
                {this.context.newCourse.course_par_hole_six.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_six"
                id="course_par_hole_six"
                required={true}
                aria-label="course_par_hole_six"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_six, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_seven">
                Hole Seven Par:
                {this.context.newCourse.course_par_hole_seven.touched && <p>{this.validateCourse_par_hole_seven()}</p>}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_seven"
                id="course_par_hole_seven"
                required={true}
                aria-label="course_par_hole_seven"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_seven, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_eight">
                Hole Eight Par:
                {this.context.newCourse.course_par_hole_eight.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_eight"
                id="course_par_hole_eight"
                required={true}
                aria-label="course_par_hole_eight"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_eight, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_nine">
                Hole Nine Par:
                {this.context.newCourse.course_par_hole_nine.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_nine"
                id="course_par_hole_nine"
                required={true}
                aria-label="course_par_hole_nine"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_nine, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_ten">
                Hole Ten Par:
                {this.context.newCourse.course_par_hole_ten.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_ten"
                id="course_par_hole_ten"
                required={true}
                aria-label="course_par_hole_ten"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_ten, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_eleven">
                Hole Eleven Par:
                {this.context.newCourse.course_par_hole_eleven.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_eleven"
                id="course_par_hole_eleven"
                required={true}
                aria-label="course_par_hole_eleven"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_eleven, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_twelve">
                Hole Twelve Par:
                {this.context.newCourse.course_par_hole_twelve.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_twelve"
                id="course_par_hole_twelve"
                required={true}
                aria-label="course_par_hole_twelve"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_twelve, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_thirteen">
                Hole Thirteen Par:
                {this.context.newCourse.course_par_hole_thirteen.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_thirteen"
                id="course_par_hole_thirteen"
                required={true}
                aria-label="course_par_hole_thirteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_thirteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_fourteen">
                Hole Fourteen Par:
                {this.context.newCourse.course_par_hole_fourteen.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_fourteen"
                id="course_par_hole_fourteen"
                required={true}
                aria-label="course_par_hole_fourteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_fourteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_fifteen">
                Hole Fifteen Par:
                {this.context.newCourse.course_par_hole_fifteen.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_fifteen"
                id="course_par_hole_fifteen"
                required={true}
                aria-label="course_par_hole_fifteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_fifteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_sixteen">
                Hole Sixteen Par:
                {this.context.newCourse.course_par_hole_sixteen.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_sixteen"
                id="course_par_hole_sixteen"
                required={true}
                aria-label="course_par_hole_sixteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_sixteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_seventeen">
                Hole Seventeen Par:
                {this.context.newCourse.course_par_hole_seventeen.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_seventeen"
                id="course_par_hole_seventeen"
                required={true}
                aria-label="course_par_hole_seventeen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_seventeen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_par_hole_eighteen">
                Hole Eighteen Par:
                {this.context.newCourse.course_par_hole_eighteen.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_par_hole_eighteen"
                id="course_par_hole_eighteen"
                required={true}
                aria-label="course_par_hole_eighteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_eighteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_summary">
                Course Summary:
                {this.context.newCourse.course_summary.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_summary"
                id="course_summary"
                required={true}
                aria-label="course_summary"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_summary, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="course_url">
                Course Website:
                {this.context.newCourse.course_url.touched}
            </label>
            <input
                className="AddCoursePage_form"
                type="text"
                name="course_url"
                id="course_url"
                required={true}
                aria-label="course_url"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_url, e.target.value)
                }
            />
            </div>
            <div className="AddCourse_buttons">
                <button className="AddCourse_commands" type='button' onClick={this.handleClickCancel}>
                    Cancel
                </button>
                <button className="AddCourse_commands" type='submit'>
                    Add
                </button>
            </div>
        </form>
        </div>
    );
  }
}

AddCourse.propTypes = {
    history: PropTypes.object
  };

export default AddCourse;