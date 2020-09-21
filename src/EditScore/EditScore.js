import React, { Component } from 'react';
import './EditScore.css';
import GolfContext from '../GolfContext';
import PropTypes from 'prop-types';
import config from '../config';

const Required = () => (
    <span className="EditScore_required">*</span>
)

class EditScore extends Component {
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
        date_modified: '',
        course_id: '',
        score_hole_one: '',
        score_hole_two: '',
        score_hole_three: '',
        score_hole_four: '',
        score_hole_five: '',
        score_hole_six: '',
        score_hole_seven: '',
        score_hole_eight: '',
        score_hole_nine: '',
        score_hole_ten: '',
        score_hole_eleven: '',
        score_hole_twelve: '',
        score_hole_thirteen: '',
        score_hole_fourteen: '',
        score_hole_fifteen: '',
        score_hole_sixteen: '',
        score_hole_seventeen: '',
        score_hole_eighteen: '',
        total_score: '',
        to_par: ''
    };

    componentDidMount() {
        const { scoreId } = this.props.match.params;
        fetch(`${config.API_ENDPOINT}/api/scores/${scoreId}`, {
          method: 'GET',
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error));
    
            return res.json();
          })
          .then(responseData => {
            this.setState({
                id: responseData.id,
                name: responseData.name,
                date_modified: responseData.date_modified,
                course_id: responseData.course_id,
                score_hole_one: responseData.score_hole_one,
                score_hole_two: responseData.score_hole_two,
                score_hole_three: responseData.score_hole_three,
                score_hole_four: responseData.score_hole_four,
                score_hole_five: responseData.score_hole_five,
                score_hole_six: responseData.score_hole_six,
                score_hole_seven: responseData.score_hole_seven,
                score_hole_eight: responseData.score_hole_eight,
                score_hole_nine: responseData.score_hole_nine,
                score_hole_ten: responseData.score_hole_ten,
                score_hole_eleven: responseData.score_hole_eleven,
                score_hole_twelve: responseData.score_hole_twelve,
                score_hole_thirteen: responseData.score_hole_thirteen,
                score_hole_fourteen: responseData.score_hole_fourteen,
                score_hole_fifteen: responseData.score_hole_fifteen,
                score_hole_sixteen: responseData.score_hole_sixteen,
                score_hole_seventeen: responseData.score_hole_seventeen,
                score_hole_eighteen: responseData.score_hole_eighteen,
                total_score: responseData.total_score,
                to_par: responseData.to_par,
            });
          })
          .catch(error => {
            console.error(error);
            this.setState({ error });
          });
      };

    handleChangeName = e => {
        this.setState({ name: e.target.value });
    };

    handleChangeDate_modified = e => {
        this.setState({ date_modified: e.target.value});
    };

    handleChangeCourse_id = e => {
        this.setState({ course_id: e.target.value});
    };

    handleChangeScore_hole_one = e => {
        this.setState({ score_hole_one: e.target.value});
    };

    handleChangeScore_hole_two = e => {
        this.setState({ score_hole_two: e.target.value});
    };

    handleChangeScore_hole_three = e => {
        this.setState({ score_hole_three: e.target.value});
    };

    handleChangeScore_hole_four = e => {
        this.setState({ score_hole_four: e.target.value});
    };

    handleChangeScore_hole_five = e => {
        this.setState({ score_hole_five: e.target.value});
    };

    handleChangeScore_hole_six = e => {
        this.setState({ score_hole_six: e.target.value});
    };

    handleChangeScore_hole_seven = e => {
        this.setState({ score_hole_seven: e.target.value});
    };

    handleChangeScore_hole_eight = e => {
        this.setState({ score_hole_eight: e.target.value});
    };

    handleChangeScore_hole_nine = e => {
        this.setState({ score_hole_nine: e.target.value});
    };

    handleChangeScore_hole_ten = e => {
        this.setState({ score_hole_ten: e.target.value});
    };

    handleChangeScore_hole_eleven = e => {
        this.setState({ score_hole_eleven: e.target.value});
    };

    handleChangeScore_hole_twelve = e => {
        this.setState({ score_hole_twelve: e.target.value});
    };

    handleChangeScore_hole_thirteen = e => {
        this.setState({ score_hole_thirteen: e.target.value});
    };

    handleChangeScore_hole_fourteen = e => {
        this.setState({ score_hole_fourteen: e.target.value});
    };

    handleChangeScore_hole_fifteen = e => {
        this.setState({ score_hole_fifteen: e.target.value});
    };

    handleChangeScore_hole_sixteen = e => {
        this.setState({ score_hole_sixteen: e.target.value});
    };

    handleChangeScore_hole_seventeen = e => {
        this.setState({ score_hole_seventeen: e.target.value});
    };

    handleChangeScore_hole_eighteen = e => {
        this.setState({ score_hole_eighteen: e.target.value});
    };

    handleChangeTotal_score = e => {
        this.setState({ total_score: e.target.value});
    };

    handleChangeTo_par = e => {
        this.setState({ to_par: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault()
        const { scoreId } = this.props.match.params;
        const { id, name, date_modified, course_id, score_hole_one, score_hole_two, score_hole_three, score_hole_four, score_hole_five, score_hole_six, score_hole_seven,
            score_hole_eight, score_hole_nine, score_hole_ten, score_hole_eleven, score_hole_twelve, score_hole_thirteen, score_hole_fourteen, score_hole_fifteen, score_hole_sixteen,
            score_hole_seventeen, score_hole_eighteen, total_score, to_par } = this.state;
        const newScore = { id, name, date_modified, course_id, score_hole_one, score_hole_two, score_hole_three, score_hole_four, score_hole_five, score_hole_six, score_hole_seven,
            score_hole_eight, score_hole_nine, score_hole_ten, score_hole_eleven, score_hole_twelve, score_hole_thirteen, score_hole_fourteen, score_hole_fifteen, score_hole_sixteen,
            score_hole_seventeen, score_hole_eighteen, total_score, to_par };
        fetch(`${config.API_ENDPOINT}/api/scores/${scoreId}`, {
          method: 'PATCH',
          body: JSON.stringify(newScore),
          headers: {
            'content-type': 'application/json',
          },
        })
          .then(res => {
            if (!res.ok);
              return res.json().then(error => Promise.reject(error));
          })
          .then(() => {
            this.resetFields(newScore);
            this.context.updateScore(newScore);
            this.props.history.push(`/course-score/${scoreId}`);
          })
          .catch(error => {
            console.error(error);
            this.setState({ error });
          })
      }

      parseCourses = () => {
        return this.context.courses.map(course => (
          <option key={course.id} name={course.id} value={course.id}>
            {course.name}
          </option>
        ));
      };

      resetFields = (newFields) => {
        this.setState({
            id: newFields.id || '',
            name: newFields.name || '',
            course_id: newFields.course_id || '',
            score_hole_one: newFields.score_hole_one || '',
            score_hole_two: newFields.score_hole_two || '',
            score_hole_three: newFields.score_hole_three || '',
            score_hole_four: newFields.score_hole_four || '',
            score_hole_five: newFields.score_hole_five || '',
            score_hole_six: newFields.score_hole_six || '',
            score_hole_seven: newFields.score_hole_seven || '',
            score_hole_eight: newFields.score_hole_eight || '',
            score_hole_nine: newFields.score_hole_nine || '',
            score_hole_ten: newFields.score_hole_ten || '',
            score_hole_eleven: newFields.score_hole_eleven || '',
            score_hole_twelve: newFields.score_hole_twelve || '',
            score_hole_thirteen: newFields.score_hole_thirteen || '',
            score_hole_fourteen: newFields.score_hole_fourteen || '',
            score_hole_fifteen: newFields.score_hole_fifteen || '',
            score_hole_sixteen: newFields.score_hole_sixteen || '',
            score_hole_seventeen: newFields.score_hole_seventeen || '',
            score_hole_eighteen: newFields.score_hole_eighteen || '',
            total_score: newFields.total_score || '',
            to_par: newFields.to_par || '',
        });
      };

      handleClickCancel = () => {
        const { scoreId } = this.props.match.params;
        this.props.history.push(`/course-score/${scoreId}`);
      };

  render() {
    const { error, name, score_hole_one, score_hole_two, score_hole_three, score_hole_four, score_hole_five, score_hole_six, score_hole_seven,
        score_hole_eight, score_hole_nine, score_hole_ten, score_hole_eleven, score_hole_twelve, score_hole_thirteen, score_hole_fourteen, score_hole_fifteen, score_hole_sixteen,
        score_hole_seventeen, score_hole_eighteen, total_score, to_par } = this.state;
    return (
      <div className="EditScorePage">
        <div className="EditScorePage_heading">
          <h1>Edit Score</h1>
        </div>
        <form 
            className="EditScore_form"
            onSubmit={this.handleSubmit}
        >
            <div className="EditScore__error" role='alert'>
            {error && <p>{error.message}</p>}
            </div>
            <div className="EditScore_courseName">
                <label>
                    Score Name:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_name"
                    id="score_name"
                    placeholder="My Score"
                    required
                    value={name}
                    onChange={this.handleChangeName} 
                />
            </div>
            <div className="EditScore_courseSelect">
                <label>
                    Select Course:
                    {' '}
                    <Required />
                </label>
                <select 
                    className="EditScorePage_form"
                    name="course_id"
                    id="course_id"
                    required
                    onChange={this.handleChangeCourse_id} 
                >
                {this.parseCourses()}
                </select>
            </div>
            <div>
                <label>
                    Score Hole One:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="scpre_hole_one"
                    id="scpre_hole_one"
                    placeholder="4"
                    required
                    value={score_hole_one}
                    onChange={this.handleChangeScore_hole_one} 
                />
            </div>
            <div>
                <label>
                    Score Hole Two:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_two"
                    id="score_hole_two"
                    placeholder="4"
                    required
                    value={score_hole_two}
                    onChange={this.handleChangeScore_hole_two} 
                />
            </div>
            <div>
                <label>
                    Score Hole Three:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_three"
                    id="score_hole_three"
                    placeholder="4"
                    required
                    value={score_hole_three}
                    onChange={this.handleChangeScore_hole_three} 
                />
            </div>
            <div>
                <label>
                    Score Hole Four:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_four"
                    id="score_hole_four"
                    placeholder="4"
                    required
                    value={score_hole_four}
                    onChange={this.handleChangeScore_hole_four} 
                />
            </div>
            <div>
                <label>
                    Score Hole Five:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_five"
                    id="score_hole_five"
                    placeholder="4"
                    required
                    value={score_hole_five}
                    onChange={this.handleChangeScore_hole_five} 
                />
            </div>
            <div>
                <label>
                    Score Hole Six:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_six"
                    id="score_hole_six"
                    placeholder="4"
                    required
                    value={score_hole_six}
                    onChange={this.handleChangeScore_hole_six} 
                />
            </div>
            <div>
                <label>
                    Score Hole Seven:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_seven"
                    id="score_hole_seven"
                    placeholder="4"
                    required
                    value={score_hole_seven}
                    onChange={this.handleChangeScore_hole_seven} 
                />
            </div>
            <div>
                <label>
                    Score Hole Eight:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_eight"
                    id="score_hole_eight"
                    placeholder="4"
                    required
                    value={score_hole_eight}
                    onChange={this.handleChangeScore_hole_eight} 
                />
            </div>
            <div>
                <label>
                    Score Hole Nine:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_nine"
                    id="score_hole_nine"
                    placeholder="4"
                    required
                    value={score_hole_nine}
                    onChange={this.handleChangeScore_hole_nine} 
                />
            </div>
            <div>
                <label>
                    Score Hole Ten:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_ten"
                    id="score_hole_ten"
                    placeholder="4"
                    required
                    value={score_hole_ten}
                    onChange={this.handleChangeScore_hole_ten} 
                />
            </div>
            <div>
                <label>
                    Score Hole Eleven:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_eleven"
                    id="score_hole_eleven"
                    placeholder="4"
                    required
                    value={score_hole_eleven}
                    onChange={this.handleChangeScore_hole_eleven} 
                />
            </div>
            <div>
                <label>
                    Score Hole Twelve:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_twelve"
                    id="score_hole_twelve"
                    placeholder="4"
                    required
                    value={score_hole_twelve}
                    onChange={this.handleChangeScore_hole_twelve} 
                />
            </div>
            <div>
                <label>
                    Score Hole Thirteen:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_thirteen"
                    id="score_hole_thirteen"
                    placeholder="4"
                    required
                    value={score_hole_thirteen}
                    onChange={this.handleChangeScore_hole_thirteen} 
                />
            </div>
            <div>
                <label>
                    Score Hole Fourteen:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_fourteen"
                    id="score_hole_fourteen"
                    placeholder="4"
                    required
                    value={score_hole_fourteen}
                    onChange={this.handleChangeScore_hole_fourteen} 
                />
            </div>
            <div>
                <label>
                    Score Hole Fifteen:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_fifteen"
                    id="score_hole_fifteenr"
                    placeholder="4"
                    required
                    value={score_hole_fifteen}
                    onChange={this.handleChangeScore_hole_fifteen} 
                />
            </div>
            <div>
                <label>
                    Score Hole Sixteen
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_sixteen"
                    id="score_hole_sixteen"
                    placeholder="4"
                    required
                    value={score_hole_sixteen}
                    onChange={this.handleChangeScore_hole_sixteen} 
                />
            </div>
            <div>
                <label>
                    Score Hole Seventeen:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_seventeen"
                    id="score_hole_seventeen"
                    placeholder="4"
                    required
                    value={score_hole_seventeen}
                    onChange={this.handleChangeScore_hole_seventeen} 
                />
            </div>
            <div>
                <label>
                    Score Hole Eighteen:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="score_hole_eighteen"
                    id="score_hole_eighteen"
                    placeholder="4"
                    required
                    value={score_hole_eighteen}
                    onChange={this.handleChangeScore_hole_eighteen} 
                />
            </div>
            <div>
                <label>
                    Total Score:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text"
                    name="total_score"
                    id="total_score"
                    placeholder="80"
                    required
                    value={total_score}
                    onChange={this.handleChangeTotal_score} 
                />
            </div>
            <div>
                <label>
                    To Par:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditScorePage_form"
                    type="text" 
                    name="to_par"
                    id="to_par"
                    placeholder="+8"
                    required
                    value={to_par}
                    onChange={this.handleChangeTo_par} 
                />
            </div>
            <div className="EditScore_buttons">
            <button className="EditScore_commandsCancel" type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            <button className="EditScore_commands" type='submit'>
              Save
            </button>
          </div>
        </form>
        </div>
    );
  };
};

export default EditScore;