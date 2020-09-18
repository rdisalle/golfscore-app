import React, { Component } from 'react';
import './ScoresPage.css';
import { Link } from 'react-router-dom';
import GolfContext from '../GolfContext';
import config from '../config';
import PropTypes from 'prop-types';
import format from 'date-fns/format'

class ScoresPage extends Component {
    static defaultProps = {
        name: '',
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
        to_par: '',
      }

    static contextType = GolfContext;

    handleClickDelete = e => {
        e.preventDefault()
        const scoreId = this.props.id;
    
        fetch(`${config.API_ENDPOINT}/api/scores/${scoreId}`, {
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
              this.props.delete()
            this.context.deleteScore(scoreId)
          })
          .catch(error => {
            console.error({ error })
          })
      }

  render() {
    const { id, name, score_hole_one, score_hole_two, score_hole_three, score_hole_four, score_hole_five, score_hole_six, score_hole_seven,
        score_hole_eight, score_hole_nine, score_hole_ten, score_hole_eleven, score_hole_twelve, score_hole_thirteen, score_hole_fourteen, score_hole_fifteen, score_hole_sixteen,
        score_hole_seventeen, score_hole_eighteen, total_score, to_par, date_modified } = this.props
    return (
      <div className="ScoreItem">
        <div className="ScoreInfo">
        <ul className="ScoresPage_list">
          <li className="ScoresPage_name">
          {name}
          </li>
          <li className="ScorePage_hole">
          1) {' '} {score_hole_one}
          </li>
          <li className="ScorePage_hole">
          2) {' '} {score_hole_two}
          </li>
          <li className="ScorePage_hole">
          3) {' '} {score_hole_three} 
          </li>
          <li className="ScorePage_hole">
          4) {' '} {score_hole_four}
          </li>
          <li className="ScorePage_hole">
          5) {' '} {score_hole_five}
          </li>
          <li className="ScorePage_hole">
          6) {' '} {score_hole_six}
          </li>
          <li className="ScorePage_hole">
          7) {' '} {score_hole_seven}
          </li>
          <li className="ScorePage_hole">
          8) {' '} {score_hole_eight}
          </li>
          <li className="ScorePage_hole">
          9) {' '} {score_hole_nine}
          </li>
          <li className="ScorePage_hole">
          10) {' '} {score_hole_ten}
          </li>
          <li className="ScorePage_hole">
          11) {' '} {score_hole_eleven}
          </li>
          <li className="ScorePage_hole">
          12) {' '} {score_hole_twelve} 
          </li>
          <li className="ScorePage_hole">
          13) {' '} {score_hole_thirteen}
          </li>
          <li className="ScorePage_hole">
          14) {' '} {score_hole_fourteen}
          </li>
          <li className="ScorePage_hole"> 
          15) {' '} {score_hole_fifteen}
          </li>
          <li className="ScorePage_hole"> 
          16) {' '} {score_hole_sixteen}
          </li>
          <li className="ScorePage_hole">
          17) {' '} {score_hole_seventeen}
          </li>
          <li className="ScorePage_hole">
          18) {' '} {score_hole_eighteen}
          </li>
          <li className="ScoresPage_total">
          Total: {' '} {total_score}
          </li>
          <li className="ScoresPage_toPar">
          {to_par}
          </li>
          <li>
          <div className="score_dates">
          <div className="score_dates-modified">
            Created:
            {' '}
            <span className="Date">
            {format(new Date(date_modified), "LLLL do yyyy")}
            </span>
          </div>
          </div>
          </li>
        </ul>
        </div>
        <div className="ScoresPage_command">
            <Link className="ScoresPage_link" to={`/edit-score-page/${id}`}>
                Edit Score
            </Link>
        </div>
        <button
            className="Score_Delete"
            type='button'
            onClick={this.handleClickDelete}
            > 
            Delete
          </button>
      </div>
    );
    }
}   

ScoresPage.propTypes = {
    id: PropTypes.number,
    onDeleteNote: PropTypes.func,
    name: PropTypes.string.isRequired,
    score_hole_one: PropTypes.string.isRequired,
    score_hole_two: PropTypes.string.isRequired,
    score_hole_three: PropTypes.string.isRequired,
    score_hole_four: PropTypes.string.isRequired,
    score_hole_five: PropTypes.string.isRequired,
    score_hole_six: PropTypes.string.isRequired,
    score_hole_seven: PropTypes.string.isRequired,
    score_hole_eight: PropTypes.string.isRequired,
    score_hole_nine: PropTypes.string.isRequired,
    score_hole_ten: PropTypes.string.isRequired,
    score_hole_eleven: PropTypes.string.isRequired,
    score_hole_twelve: PropTypes.string.isRequired,
    score_hole_thirteen: PropTypes.string.isRequired,
    score_hole_fourteen: PropTypes.string.isRequired,
    score_hole_fifteen: PropTypes.string.isRequired,
    score_hole_sixteen: PropTypes.string.isRequired,
    score_hole_seventeen: PropTypes.string.isRequired,
    score_hole_eighteen: PropTypes.string.isRequired,
    total_score: PropTypes.string.isRequired,
    to_par: PropTypes.string.isRequired,
  };

export default ScoresPage;