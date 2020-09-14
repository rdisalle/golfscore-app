import React, { Component } from 'react';
import './AddCourse.css';
import config from '../config';
import GolfContext from '../GolfContext'

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

    validateName = () => {
        if (this.context.newCourse.name.value.length === 0) {
          return 'Name is required'
        }
      }

    validateLocation = () => {
        if (this.context.newCourse.location.value.length === 0) {
          return 'Location is required'
        }
      }

    validateCourse_distance = () => {
        if (this.context.newCourse.course_distance.value.length === 0) {
          return 'Distance is required'
        }
      }

    validateCourse_par= () => {
        if (this.context.newCourse.course_par.value.length === 0) {
          return 'Course Par is required'
        }
      }

    validateCourse_par_hole_one = () => {
        if (this.context.newCourse.course_par_hole_one.value.length === 0) {
          return 'Hole one is required'
        }
      }

    validateCourse_par_hole_two = () => {
        if (this.context.newCourse.course_par_hole_two.value.length === 0) {
          return 'Hole two is required'
        }
      }

    validateCourse_par_hole_three = () => {
        if (this.context.newCourse.course_par_hole_three.value.length === 0) {
          return 'Hole three is required'
        }
      }

    validateCourse_par_hole_four = () => {
        if (this.context.newCourse.course_par_hole_four.value.length === 0) {
          return 'Hole four is required'
        }
      }

    validateCourse_par_hole_five = () => {
        if (this.context.newCourse.course_par_hole_five.value.length === 0) {
          return 'Hole five is required'
        }
      }

    validateCourse_par_hole_six = () => {
        if (this.context.newCourse.course_par_hole_six.value.length === 0) {
          return 'Hole six is required'
        }
      }
    
    validateCourse_par_hole_seven = () => {
        if (this.context.newCourse.course_par_hole_seven.value.length === 0) {
          return 'Hole seven is required'
        }
      }

    validateCourse_par_hole_eight = () => {
        if (this.context.newCourse.course_par_hole_eight.value.length === 0) {
          return 'Hole eight is required'
        }
      }

    validateCourse_par_hole_nine = () => {
        if (this.context.newCourse.course_par_hole_nine.value.length === 0) {
          return 'Hole nine is required'
        }
      }

    validateCourse_par_hole_ten = () => {
        if (this.context.newCourse.course_par_hole_ten.value.length === 0) {
          return 'Hole ten is required'
        }
      }

    validateCourse_par_hole_eleven = () => {
        if (this.context.newCourse.course_par_hole_eleven.value.length === 0) {
          return 'Hole eleven is required'
        }
      }

    validateCourse_par_hole_twelve = () => {
        if (this.context.newCourse.course_par_hole_twelve.value.length === 0) {
          return 'Hole twelve is required'
        }
      }

    validateCourse_par_hole_thirteen = () => {
        if (this.context.newCourse.course_par_hole_thirteen.value.length === 0) {
          return 'Hole thirteen is required'
        }
      }

    validateCourse_par_hole_fourteen = () => {
        if (this.context.newCourse.course_par_hole_fourteen.value.length === 0) {
          return 'Hole fourteen is required'
        }
      }

    validateCourse_par_hole_fifteen = () => {
        if (this.context.newCourse.course_par_hole_fifteen.value.length === 0) {
          return 'Hole fifteen is required'
        }
      }

    validateCourse_par_hole_sixteen = () => {
        if (this.context.newCourse.course_par_hole_sixteen.value.length === 0) {
          return 'Hole sixteen is required'
        }
      }
    
    validateCourse_par_hole_seventeen = () => {
        if (this.context.newCourse.course_par_hole_seventeen.value.length === 0) {
          return 'Hole seventeen is required'
        }
      }

    validateCourse_par_hole_eighteen = () => {
        if (this.context.newCourse.course_par_hole_eighteen.value.length === 0) {
          return 'Hole eighteen is required'
        }
      }

    validateCourse_summary = () => {
        if (this.context.newCourse.course_summary.value.length === 0) {
          return 'Course summary is required'
        }
      }

    validateCourse_url = () => {
        if (this.context.newCourse.course_url.value.length === 0) {
          return 'Course url is required'
        }
      }    

    handleClickCancel = () => {
        this.props.history.push('/view-course-list')
      };

    render() {
    return (
      <div className="AddCoursePage">
        <div className="AddCoursePage__heading">
          <h1>Add Score!</h1>
        </div>
        <form 
            className="AddCourseForm"
            onSubmit={e => this.handleFormSubmit(e)}
        >
            <label htmlFor="name">
                Name:
                {this.context.newCourse.name.touched && <p>{this.validateName()}</p>}
            </label>
            <input
                type="text"
                name="name"
                id="name"
                required={true}
                aria-label="Name"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.name, e.target.value)
                }
            />
            <label htmlFor="location">
                Location:
                {this.context.newCourse.location.touched && <p>{this.validateLocation()}</p>}
            </label>
            <input
                type="text"
                name="location"
                id="location"
                required={true}
                aria-label="location"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.location, e.target.value)
                }
            />
            <label htmlFor="course_distance">
                Course Distance:
                {this.context.newCourse.course_distance.touched && <p>{this.validateCourse_distance()}</p>}
            </label>
            <input
                type="text"
                name="course_distance"
                id="course_distance"
                required={true}
                aria-label="course_distance"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_distance, e.target.value)
                }
            />
            <label htmlFor="course_par">
                Course Par:
                {this.context.newCourse.course_par.touched && <p>{this.validateCourse_par()}</p>}
            </label>
            <input
                type="text"
                name="course_par"
                id="course_par"
                required={true}
                aria-label="course_par"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_one">
                Hole One Par:
                {this.context.newCourse.course_par_hole_one.touched && <p>{this.validateCourse_par_hole_one()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_one"
                id="course_par_hole_one"
                required={true}
                aria-label="course_par_hole_one"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_one, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_two">
                Hole Two Par:
                {this.context.newCourse.course_par_hole_two.touched && <p>{this.validateCourse_par_hole_two()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_two"
                id="course_par_hole_two"
                required={true}
                aria-label="course_par_hole_two"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_two, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_three">
                Hole Three Par:
                {this.context.newCourse.course_par_hole_three.touched && <p>{this.validateCourse_par_hole_three()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_three"
                id="course_par_hole_three"
                required={true}
                aria-label="course_par_hole_three"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_three, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_four">
                Hole Four Par:
                {this.context.newCourse.course_par_hole_four.touched && <p>{this.validateCourse_par_hole_four()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_four"
                id="course_par_hole_four"
                required={true}
                aria-label="course_par_hole_four"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_four, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_five">
                Hole Five Par:
                {this.context.newCourse.course_par_hole_five.touched && <p>{this.validateCourse_par_hole_five()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_five"
                id="course_par_hole_five"
                required={true}
                aria-label="course_par_hole_five"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_five, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_six">
                Hole Six Par:
                {this.context.newCourse.course_par_hole_six.touched && <p>{this.validateCourse_par_hole_six()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_six"
                id="course_par_hole_six"
                required={true}
                aria-label="course_par_hole_six"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_six, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_seven">
                Hole Seven Par:
                {this.context.newCourse.course_par_hole_seven.touched && <p>{this.validateCourse_par_hole_seven()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_seven"
                id="course_par_hole_seven"
                required={true}
                aria-label="course_par_hole_seven"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_seven, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_eight">
                Hole Eight Par:
                {this.context.newCourse.course_par_hole_eight.touched && <p>{this.validateCourse_par_hole_eight()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_eight"
                id="course_par_hole_eight"
                required={true}
                aria-label="course_par_hole_eight"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_eight, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_nine">
                Hole Nine Par:
                {this.context.newCourse.course_par_hole_nine.touched && <p>{this.validateCourse_par_hole_nine()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_nine"
                id="course_par_hole_nine"
                required={true}
                aria-label="course_par_hole_nine"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_nine, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_ten">
                Hole Ten Par:
                {this.context.newCourse.course_par_hole_ten.touched && <p>{this.validateCourse_par_hole_ten()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_ten"
                id="course_par_hole_ten"
                required={true}
                aria-label="course_par_hole_ten"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_ten, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_eleven">
                Hole Eleven Par:
                {this.context.newCourse.course_par_hole_eleven.touched && <p>{this.validateCourse_par_hole_eleven()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_eleven"
                id="course_par_hole_eleven"
                required={true}
                aria-label="course_par_hole_eleven"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_eleven, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_twelve">
                Hole Twelve Par:
                {this.context.newCourse.course_par_hole_twelve.touched && <p>{this.validateCourse_par_hole_twelve()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_twelve"
                id="course_par_hole_twelve"
                required={true}
                aria-label="course_par_hole_twelve"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_twelve, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_thirteen">
                Hole Thirteen Par:
                {this.context.newCourse.course_par_hole_thirteen.touched && <p>{this.validateCourse_par_hole_thirteen()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_thirteen"
                id="course_par_hole_thirteen"
                required={true}
                aria-label="course_par_hole_thirteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_thirteen, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_fourteen">
                Hole Fourteen Par:
                {this.context.newCourse.course_par_hole_fourteen.touched && <p>{this.validateCourse_par_hole_fourteen()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_fourteen"
                id="course_par_hole_fourteen"
                required={true}
                aria-label="course_par_hole_fourteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_fourteen, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_fifteen">
                Hole Fifteen Par:
                {this.context.newCourse.course_par_hole_fifteen.touched && <p>{this.validateCourse_par_hole_fifteen()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_fifteen"
                id="course_par_hole_fifteen"
                required={true}
                aria-label="course_par_hole_fifteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_fifteen, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_sixteen">
                Hole Sixteen Par:
                {this.context.newCourse.course_par_hole_sixteen.touched && <p>{this.validateCourse_par_hole_sixteen()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_sixteen"
                id="course_par_hole_sixteen"
                required={true}
                aria-label="course_par_hole_sixteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_sixteen, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_seventeen">
                Hole Seventeen Par:
                {this.context.newCourse.course_par_hole_seventeen.touched && <p>{this.validateCourse_par_hole_seventeen()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_seventeen"
                id="course_par_hole_seventeen"
                required={true}
                aria-label="course_par_hole_seventeen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_seventeen, e.target.value)
                }
            />
            <label htmlFor="course_par_hole_eighteen">
                Hole Eighteen Par:
                {this.context.newCourse.course_par_hole_eighteen.touched && <p>{this.validateCourse_par_hole_eighteen()}</p>}
            </label>
            <input
                type="text"
                name="course_par_hole_eighteen"
                id="course_par_hole_eighteen"
                required={true}
                aria-label="course_par_hole_eighteen"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_par_hole_eighteen, e.target.value)
                }
            />
            <label htmlFor="course_summary">
                Course Summary:
                {this.context.newCourse.course_summary.touched && <p>{this.validateCourse_summary()}</p>}
            </label>
            <input
                type="text"
                name="course_summary"
                id="course_summary"
                required={true}
                aria-label="course_summary"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_summary, e.target.value)
                }
            />
            <label htmlFor="course_url">
                Course Website:
                {this.context.newCourse.course_url.touched && <p>{this.validateCourse_url()}</p>}
            </label>
            <input
                type="text"
                name="course_url"
                id="course_url"
                required={true}
                aria-label="course_url"
                onChange={e =>
                    this.context.updateNewCourseData(e.target.course_url, e.target.value)
                }
            />
        <div className='AddCourse__buttons'>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button type='submit'>
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