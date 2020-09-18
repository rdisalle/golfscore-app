import React, { Component } from 'react';
import './EditCourse.css';
import GolfContext from '../GolfContext'
import PropTypes from 'prop-types';
import config from '../config'

const Required = () => (
    <span className="EditCourse_required">*</span>
)

class EditCourse extends Component {
    static propTypes = {
        match: PropTypes.shape({
          params: PropTypes.object,
        }),
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };

    static contextType = GolfContext;

    state = {
        error: null,
        id: '',
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

    componentDidMount() {
        const { courseId } = this.props.match.params
        fetch(`${config.API_ENDPOINT}/api/courses/${courseId}`, {
          method: 'GET',
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
    
            return res.json()
          })
          .then(responseData => {
            this.setState({
                id: responseData.id,
                name: responseData.name,
                location: responseData.location,
                course_distance: responseData.course_distance,
                course_par: responseData.course_par,
                course_par_hole_one: responseData.course_par_hole_one,
                course_par_hole_two: responseData.course_par_hole_two,
                course_par_hole_three: responseData.course_par_hole_three,
                course_par_hole_four: responseData.course_par_hole_four,
                course_par_hole_five: responseData.course_par_hole_five,
                course_par_hole_six: responseData.course_par_hole_six,
                course_par_hole_seven: responseData.course_par_hole_seven,
                course_par_hole_eight: responseData.course_par_hole_eight,
                course_par_hole_nine: responseData.course_par_hole_nine,
                course_par_hole_ten: responseData.course_par_hole_ten,
                course_par_hole_eleven: responseData.course_par_hole_eleven,
                course_par_hole_twelve: responseData.course_par_hole_twelve,
                course_par_hole_thirteen: responseData.course_par_hole_thirteen,
                course_par_hole_fourteen: responseData.course_par_hole_fourteen,
                course_par_hole_fifteen: responseData.course_par_hole_fifteen,
                course_par_hole_sixteen: responseData.course_par_hole_sixteen,
                course_par_hole_seventeen: responseData.course_par_hole_seventeen,
                course_par_hole_eighteen: responseData.course_par_hole_eighteen,
                course_summary: responseData.course_summary,
                course_url: responseData.course_url,
            })
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }

    handleChangeName = e => {
        this.setState({ name: e.target.value })
    };

    handleChangeLocation = e => {
        this.setState({ location: e.target.value })
    };
    
    handleChangeCourse_distance = e => {
        this.setState({ course_distance: e.target.value})
    }
    
    handleChangeCourse_par = e => {
        this.setState({ course_par: e.target.value})
    }
      
    handleChangeCourse_par_hole_one = e => {
        this.setState({ course_par_hole_one: e.target.value})
    }

    handleChangeCourse_par_hole_two = e => {
        this.setState({ course_par_hole_two: e.target.value})
    }

    handleChangeCourse_par_hole_three = e => {
        this.setState({ course_par_hole_three: e.target.value})
    }

    handleChangeCourse_par_hole_four = e => {
        this.setState({ course_par_hole_four: e.target.value})
    }

    handleChangeCourse_par_hole_five = e => {
        this.setState({ course_par_hole_five: e.target.value})
    }

    handleChangeCourse_par_hole_six = e => {
        this.setState({ course_par_hole_six: e.target.value})
    }

    handleChangeCourse_par_hole_seven = e => {
        this.setState({ course_par_hole_seven: e.target.value})
    }

    handleChangeCourse_par_hole_eight = e => {
        this.setState({ course_par_hole_eight: e.target.value})
    }

    handleChangeCourse_par_hole_nine = e => {
        this.setState({ course_par_hole_nine: e.target.value})
    }

    handleChangeCourse_par_hole_ten = e => {
        this.setState({ course_par_hole_ten: e.target.value})
    }

    handleChangeCourse_par_hole_eleven = e => {
        this.setState({ course_par_hole_eleven: e.target.value})
    }

    handleChangeCourse_par_hole_twelve = e => {
        this.setState({ course_par_hole_twelve: e.target.value})
    }

    handleChangeCourse_par_hole_thirteen = e => {
        this.setState({ course_par_hole_thirteen: e.target.value})
    }

    handleChangeCourse_par_hole_fourteen = e => {
        this.setState({ course_par_hole_fourteen: e.target.value})
    }

    handleChangeCourse_par_hole_fifteen = e => {
        this.setState({ course_par_hole_fifteen: e.target.value})
    }

    handleChangeCourse_par_hole_sixteen = e => {
        this.setState({ course_par_hole_sixteen: e.target.value})
    }

    handleChangeCourse_par_hole_seventeen = e => {
        this.setState({ course_par_hole_seventeen: e.target.value})
    }

    handleChangeCourse_par_hole_eighteen = e => {
        this.setState({ course_par_hole_eighteen: e.target.value})
    }

    handleChangeCourse_summary = e => {
        this.setState({ course_summary: e.target.value})
    }

    handleChangeCourse_url = e => {
        this.setState({ course_url: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const { courseId } = this.props.match.params
        const { id, name, location, course_distance, course_par, course_par_hole_one, course_par_hole_two,
            course_par_hole_three, course_par_hole_four, course_par_hole_five, course_par_hole_six, 
            course_par_hole_seven, course_par_hole_eight, course_par_hole_nine, course_par_hole_ten, 
            course_par_hole_eleven, course_par_hole_twelve, course_par_hole_thirteen, course_par_hole_fourteen,
            course_par_hole_fifteen, course_par_hole_sixteen, course_par_hole_seventeen, course_par_hole_eighteen,
            course_summary, course_url } = this.state
        const newCourse = { id, name, location, course_distance, course_par, course_par_hole_one, course_par_hole_two,
            course_par_hole_three, course_par_hole_four, course_par_hole_five, course_par_hole_six, 
            course_par_hole_seven, course_par_hole_eight, course_par_hole_nine, course_par_hole_ten, 
            course_par_hole_eleven, course_par_hole_twelve, course_par_hole_thirteen, course_par_hole_fourteen,
            course_par_hole_fifteen, course_par_hole_sixteen, course_par_hole_seventeen, course_par_hole_eighteen,
            course_summary, course_url }
        fetch(`${config.API_ENDPOINT}/api/courses/${courseId}`, {
          method: 'PATCH',
          body: JSON.stringify(newCourse),
          headers: {
            'content-type': 'application/json',
          },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
          })
          .then(() => {
            this.resetFields(newCourse)
            this.context.updateCourse(newCourse)
            this.props.history.push(`/course-page/${courseId}`)
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }
    
      resetFields = (newFields) => {
        this.setState({
            id: newFields.id || '',
            name: newFields.name || '',
            location: newFields.location || '',
            course_distance: newFields.course_distance || '',
            course_par: newFields.course_par || '',
            course_par_hole_one: newFields.course_par_hole_one || '',
            course_par_hole_two: newFields.course_par_hole_two || '',
            course_par_hole_three: newFields.course_par_hole_three || '',
            course_par_hole_four: newFields.course_par_hole_four || '',
            course_par_hole_five: newFields.course_par_hole_five || '',
            course_par_hole_six: newFields.course_par_hole_six || '',
            course_par_hole_seven: newFields.course_par_hole_seven || '',
            course_par_hole_eight: newFields.course_par_hole_eight || '',
            course_par_hole_nine: newFields.course_par_hole_nine || '',
            course_par_hole_ten: newFields.course_par_hole_ten || '',
            course_par_hole_eleven: newFields.course_par_hole_eleven || '',
            course_par_hole_twelve: newFields.course_par_hole_tweleve || '',
            course_par_hole_thirteen: newFields.course_par_hole_thirteen || '',
            course_par_hole_fourteen: newFields.course_par_hole_fourteen || '',
            course_par_hole_fifteen: newFields.course_par_hole_fifteen || '',
            course_par_hole_sixteen: newFields.course_par_hole_sixteen || '',
            course_par_hole_seventeen: newFields.course_par_hole_seventeen || '',
            course_par_hole_eighteen: newFields.course_par_hole_eighteen || '',
            course_summary: newFields.course_summary || '',
            course_url: newFields.course_url || '',
        })
      }
    
      handleClickCancel = () => {
        const { courseId } = this.props.match.params
        this.props.history.push(`/course-page/${courseId}`)
      };

  render() {
    const { error, name, location, course_distance, course_par, course_par_hole_one, course_par_hole_two,
        course_par_hole_three, course_par_hole_four, course_par_hole_five, course_par_hole_six, 
        course_par_hole_seven, course_par_hole_eight, course_par_hole_nine, course_par_hole_ten, 
        course_par_hole_eleven, course_par_hole_twelve, course_par_hole_thirteen, course_par_hole_fourteen,
        course_par_hole_fifteen, course_par_hole_sixteen, course_par_hole_seventeen, course_par_hole_eighteen,
        course_summary, course_url } = this.state
    return (
      <div className="EditCoursePage">
        <div className="EditCoursePage__heading">
          <h1>Edit Course</h1>
        </div>
        <form 
            className="EditCourse_form"
            onSubmit={this.handleSubmit}
        >
            <div className="EditCourse_error" role='alert'>
            {error && <p>{error.message}</p>}
            </div>
            <div className="EditCourse_courseName">
                <label className="EditCourse_label">
                    Course Name:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_name"
                    id="course_name"
                    placeholder="My Golf Course"
                    required
                    value={name}
                    onChange={this.handleChangeName} 
                />
            </div>
            <div className="EditCourse_courseLocation">
                <label>
                    Course Location (City, State):
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_location"
                    id="course_location"
                    placeholder="City, State"
                    required
                    value={location}
                    onChange={this.handleChangeLocation} 
                />
            </div>
            <div>
                <label>
                    Course Distance:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_distance"
                    id="course_distance"
                    placeholder="6,000 yds"
                    required
                    value={course_distance}
                    onChange={this.handleChangeCourse_distance} 
                />
            </div>
            <div>
                <label>
                    Course Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par"
                    id="course_par"
                    placeholder="72"
                    required
                    value={course_par}
                    onChange={this.handleChangeCourse_par} 
                />
            </div>
            <div>
                <label>
                    Hole One Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_one"
                    id="course_par_hole_one"
                    placeholder="4"
                    required
                    value={course_par_hole_one}
                    onChange={this.handleChangeCourse_par_hole_one} 
                />
            </div>
            <div>
                <label>
                    Hole Two Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_two"
                    id="course_par_hole_two"
                    placeholder="4"
                    required
                    value={course_par_hole_two}
                    onChange={this.handleChangeCourse_par_hole_two} 
                />
            </div>
            <div>
                <label>
                    Hole Three Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_three"
                    id="course_par_hole_three"
                    placeholder="4"
                    required
                    value={course_par_hole_three}
                    onChange={this.handleChangeCourse_par_hole_three} 
                />
            </div>
            <div>
                <label>
                    Hole Four Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_four"
                    id="course_par_hole_four"
                    placeholder="4"
                    required
                    value={course_par_hole_four}
                    onChange={this.handleChangeCourse_par_hole_four} 
                />
            </div>
            <div>
                <label>
                    Hole Five Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_five"
                    id="course_par_hole_five"
                    placeholder="4"
                    required
                    value={course_par_hole_five}
                    onChange={this.handleChangeCourse_par_hole_five} 
                />
            </div>
            <div>
                <label>
                    Hole Six Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_six"
                    id="course_par_hole_six"
                    placeholder="4"
                    required
                    value={course_par_hole_six}
                    onChange={this.handleChangeCourse_par_hole_six} 
                />
            </div>
            <div>
                <label>
                    Hole Seven Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_seven"
                    id="course_par_hole_seven"
                    placeholder="4"
                    required
                    value={course_par_hole_seven}
                    onChange={this.handleChangeCourse_par_hole_seven} 
                />
            </div>
            <div>
                <label>
                    Hole Eight Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_eight"
                    id="course_par_hole_eight"
                    placeholder="4"
                    required
                    value={course_par_hole_eight}
                    onChange={this.handleChangeCourse_par_hole_eight} 
                />
            </div>
            <div>
                <label>
                    Hole Nine Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_nine"
                    id="course_par_hole_nine"
                    placeholder="4"
                    required
                    value={course_par_hole_nine}
                    onChange={this.handleChangeCourse_par_hole_nine} 
                />
            </div>
            <div>
                <label>
                    Hole Ten Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_ten"
                    id="course_par_hole_ten"
                    placeholder="4"
                    required
                    value={course_par_hole_ten}
                    onChange={this.handleChangeCourse_par_hole_ten} 
                />
            </div>
            <div>
                <label>
                    Hole Eleven Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_eleven"
                    id="course_par_hole_eleven"
                    placeholder="4"
                    required
                    value={course_par_hole_eleven}
                    onChange={this.handleChangeCourse_par_hole_eleven} 
                />
            </div>
            <div>
                <label>
                    Hole Twelve Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_twelve"
                    id="course_par_hole_twelve"
                    placeholder="4"
                    required
                    value={course_par_hole_twelve}
                    onChange={this.handleChangeCourse_par_hole_twelve} 
                />
            </div>
            <div>
                <label>
                    Hole Thirteen Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_thirteen"
                    id="course_par_hole_thirteen"
                    placeholder="4"
                    required
                    value={course_par_hole_thirteen}
                    onChange={this.handleChangeCourse_par_hole_thirteen} 
                />
            </div>
            <div>
                <label>
                    Hole Fourteen Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_fourteen"
                    id="course_par_hole_fourteen"
                    placeholder="4"
                    required
                    value={course_par_hole_fourteen}
                    onChange={this.handleChangeCourse_par_hole_fourteen} 
                />
            </div>
            <div>
                <label>
                    Hole Fifteen Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_fifteen"
                    id="course_par_hole_fifteenr"
                    placeholder="4"
                    required
                    value={course_par_hole_fifteen}
                    onChange={this.handleChangeCourse_par_hole_fifteen} 
                />
            </div>
            <div>
                <label>
                    Hole Sixteen Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_sixteen"
                    id="course_par_hole_sixteen"
                    placeholder="4"
                    required
                    value={course_par_hole_sixteen}
                    onChange={this.handleChangeCourse_par_hole_sixteen} 
                />
            </div>
            <div>
                <label>
                    Hole Seventeen Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_seventeen"
                    id="course_par_hole_seventeen"
                    placeholder="4"
                    required
                    value={course_par_hole_seventeen}
                    onChange={this.handleChangeCourse_par_hole_seventeen} 
                />
            </div>
            <div>
                <label>
                    Hole Eighteen Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_par_hole_eighteen"
                    id="course_par_hole_eighteen"
                    placeholder="4"
                    required
                    value={course_par_hole_eighteen}
                    onChange={this.handleChangeCourse_par_hole_eighteen} 
                />
            </div>
            <div>
                <label>
                    Course Summary:
                    {' '}
                    <Required />
                </label>
                <textarea 
                    className="EditCoursePage_formSummary"
                    type="text" 
                    name="course_summary"
                    id="course_summary"
                    placeholder="This is info about my course!"
                    required
                    value={course_summary}
                    onChange={this.handleChangeCourse_summary} 
                />
            </div>
            <div>
                <label>
                    Course Website:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditCoursePage_form"
                    type="text" 
                    name="course_url"
                    id="course_url"
                    placeholder="www.mycourse.com"
                    required
                    value={course_url}
                    onChange={this.handleChangeCourse_url} 
                />
            </div>
            <div className="EditCourse_buttons">
            <button className="EditCourse_commandsCancel" type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            <button className="EditCourse_commands" type='submit'>
              Save
            </button>
          </div>
        </form>
        </div>
    );
  }
}

export default EditCourse;