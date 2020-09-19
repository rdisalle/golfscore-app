import React, { Component } from 'react';
import './AddScore.css';
import config from '../config';
import GolfContext from '../GolfContext'
import PropTypes from 'prop-types';

class AddScore extends Component {
    static propTypes = {
        match: PropTypes.shape({
          params: PropTypes.object,
        }),
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };

    static contextType = GolfContext

    addNewScore = score => {    
        fetch(`${config.API_ENDPOINT}/api/scores/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(score),
        })
          .then(res => {
            console.log(JSON.stringify(score))
            return res.json()
          })
          .then(resJSON => this.context.addScore(resJSON))
          .catch(error => {
            console.error({ error })
            return "There was an error with the request. Try again later."
          })
      }
      parseCourses = () => {
        return this.context.courses.map(course => (
          <option key={course.id} name={course.id} value={course.id}>
            {course.name}
          </option>
        ))
      }
    
    handleFormSubmit = e => {
        const { courseId } = this.props.match.params
        e.preventDefault(e)
        const newScore = {
            name: e.target.name.value,
            course_id: e.target.course_id.value,
            score_hole_one: e.target.score_hole_one.value,
            score_hole_two: e.target.score_hole_two.value,
            score_hole_three: e.target.score_hole_three.value,
            score_hole_four: e.target.score_hole_four.value,
            score_hole_five: e.target.score_hole_five.value,
            score_hole_six: e.target.score_hole_six.value,
            score_hole_seven: e.target.score_hole_seven.value,
            score_hole_eight: e.target.score_hole_eight.value,
            score_hole_nine: e.target.score_hole_nine.value,
            score_hole_ten: e.target.score_hole_ten.value,
            score_hole_eleven: e.target.score_hole_eleven.value,
            score_hole_twelve: e.target.score_hole_twelve.value,
            score_hole_thirteen: e.target.score_hole_thirteen.value,
            score_hole_fourteen: e.target.score_hole_fourteen.value,
            score_hole_fifteen: e.target.score_hole_fifteen.value,
            score_hole_sixteen: e.target.score_hole_sixteen.value,
            score_hole_seventeen: e.target.score_hole_seventeen.value,
            score_hole_eighteen: e.target.score_hole_eighteen.value,
            total_score: e.target.total_score.value,
            to_par: e.target.to_par.value,
        }
        this.addNewScore(newScore)
        this.props.history.push(`/all-scores/${courseId}`);
    }  

    handleClickCancel = () => {
        const { courseId } = this.props.match.params
        this.props.history.push(`/all-scores/${courseId}`)
      };

  render() {
    return (
      <div className="AddScorePage">
        <div className="AddScorePage_heading">
          <h1>Add Score</h1>
        </div>
        <form 
            className="AddScore_form"
            onSubmit={e => this.handleFormSubmit(e)}
        >
            <div>
            <label htmlFor="name">
                Score Name:
                {this.context.newScore.name.touched}
            </label>
            <input 
                className="AddScorePage_form"
                type="text" 
                name="name"
                id="name"
                required={true}
                aria-label="name"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.name, e.target.value)
                } 
            />
            </div>
            <div>
            <label htmlFor="course">
                Select Course:
            </label>
            <select 
                className="AddScorePage_form"
                name="course_id"
                id="course_id"
                required={true}
                aria-label="course_id"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.course_id, e.target.value)
                } 
            >
            {this.parseCourses()}
            </select>
            </div>
            <div>
            <label htmlFor="score_hole_one">
                Hole One Score:
                {this.context.newScore.score_hole_one.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_one"
                id="score_hole_one"
                required={true}
                aria-label="score_hole_one"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_one, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_two">
                Hole Two Score:
                {this.context.newScore.score_hole_two.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_two"
                id="score_hole_two"
                required={true}
                aria-label="score_hole_two"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_two, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_three">
                Hole Three Score:
                {this.context.newScore.score_hole_three.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_three"
                id="score_hole_three"
                required={true}
                aria-label="score_hole_three"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_three, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_four">
                Hole Four Score:
                {this.context.newScore.score_hole_four.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_four"
                id="score_hole_four"
                required={true}
                aria-label="score_hole_four"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_four, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_five">
                Hole Five Score:
                {this.context.newScore.score_hole_five.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_five"
                id="score_hole_five"
                required={true}
                aria-label="score_hole_five"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_five, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_six">
                Hole Six Score:
                {this.context.newScore.score_hole_six.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_six"
                id="score_hole_six"
                required={true}
                aria-label="score_hole_six"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_six, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_seven">
                Hole Seven Score:
                {this.context.newScore.score_hole_seven.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_seven"
                id="score_hole_seven"
                required={true}
                aria-label="score_hole_seven"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_seven, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_eight">
                Hole Eight Score:
                {this.context.newScore.score_hole_eight.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_eight"
                id="score_hole_eight"
                required={true}
                aria-label="score_hole_eight"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_eight, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_nine">
                Hole Nine Score:
                {this.context.newScore.score_hole_nine.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_nine"
                id="score_hole_nine"
                required={true}
                aria-label="score_hole_nine"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_nine, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_ten">
                Hole Ten Score:
                {this.context.newScore.score_hole_ten.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_ten"
                id="score_hole_ten"
                required={true}
                aria-label="score_hole_ten"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_ten, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_Eleven">
                Hole Eleven Score:
                {this.context.newScore.score_hole_eleven.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_eleven"
                id="score_hole_eleven"
                required={true}
                aria-label="score_hole_eleven"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_eleven, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_twelve">
                Hole Twelve Score:
                {this.context.newScore.score_hole_twelve.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_twelve"
                id="score_hole_twelve"
                required={true}
                aria-label="score_hole_twelve"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_twelve, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_thirteen">
                Hole Thirteen Score:
                {this.context.newScore.score_hole_thirteen.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_thirteen"
                id="score_hole_thirteen"
                required={true}
                aria-label="score_hole_thirteen"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_thirteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_fourteen">
                Hole Fourteen Score:
                {this.context.newScore.score_hole_fourteen.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_fourteen"
                id="score_hole_fourteen"
                required={true}
                aria-label="score_hole_fourteen"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_fourteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_fifteen">
                Hole Fifteen Score:
                {this.context.newScore.score_hole_fifteen.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_fifteen"
                id="score_hole_fifteen"
                required={true}
                aria-label="score_hole_fifteen"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_fifteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_sixteen">
                Hole Sixteen Score:
                {this.context.newScore.score_hole_sixteen.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_sixteen"
                id="score_hole_sixteen"
                required={true}
                aria-label="score_hole_sixteen"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_sixteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_seventeen">
                Hole Seventeen Score:
                {this.context.newScore.score_hole_seventeen.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_seventeen"
                id="score_hole_seventeen"
                required={true}
                aria-label="score_hole_seventeen"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_seventeen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="score_hole_eighteen">
                Hole Eighteen Score:
                {this.context.newScore.score_hole_eighteen.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="score_hole_eighteen"
                id="score_hole_eighteen"
                required={true}
                aria-label="score_hole_eighteen"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.score_hole_eighteen, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="total_score">
                Total Score:
                {this.context.newScore.total_score.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="total_score"
                id="total_score"
                required={true}
                aria-label="total_score"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.total_score, e.target.value)
                }
            />
            </div>
            <div>
            <label htmlFor="to_par">
                To Par:
                {this.context.newScore.to_par.touched}
            </label>
            <input
                className="AddScorePage_form"
                type="text"
                name="to_par"
                id="to_par"
                required={true}
                aria-label="to_par"
                onChange={e =>
                    this.context.updateNewScoreData(e.target.to_score, e.target.value)
                }
            />
            </div>
        <div className="AddScore_buttons">
            <button className="AddScore_commands" type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            <button className="AddScore_commands" type='submit'>
              Add
            </button>
          </div>
        </form>
        </div>
    );
  }
}

AddScore.propTypes = {
    history: PropTypes.object
  };

export default AddScore;