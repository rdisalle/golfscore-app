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
        course:'',
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
          {' '}
          {name}
          {' '}
          1: {score_hole_one}
          {' '}
          2: {score_hole_two}
          {' '}
          3: {score_hole_three} 
          {' '}
          4: {score_hole_four}
          {' '} 
          5: {score_hole_five}
          {' '} 
          6: {score_hole_six}
          {' '}
          7: {score_hole_seven}
          {' '}
          8: {score_hole_eight}
          {' '}
          9: {score_hole_nine}
          {' '} 
          10: {score_hole_ten}
          {' '} 
          11: {score_hole_eleven}
          {' '} 
          12: {score_hole_twelve} 
          {' '}
          13: {score_hole_thirteen}
          {' '} 
          14: {score_hole_fourteen}
          {' '} 
          15: {score_hole_fifteen}
          {' '} 
          16: {score_hole_sixteen}
          {' '}
          17: {score_hole_seventeen}
          {' '} 
          18: {score_hole_eighteen}
          {' '} 
          Total: {total_score}
          {' '} 
          {to_par}
          {' '}
          <div className='score__dates'>
          <div className='score__dates-modified'>
            Created:
            {' '}
            <span className='Date'>
            {format(new Date(date_modified), "LLLL do yyyy")}
            </span>
          </div>
        </div>
        </div>
        <div className="ScoresItem_commands">
            <Link to={`/edit-score-page/${id}`}>
                Edit Score
            </Link>
            <button
            className='Course_Delete'
            type='button'
            onClick={this.handleClickDelete}
            >
            Delete
          </button>
        </div>
      </div>
    );
    }
}   

ScoresPage.propTypes = {
    id: PropTypes.number,
    onDeleteNote: PropTypes.func,
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
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