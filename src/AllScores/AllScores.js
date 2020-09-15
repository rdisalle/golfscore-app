import React, { Component } from 'react';
import './AllScores.css';
import ScoresPage from '../ScoresPage/ScoresPage'
import { Link } from 'react-router-dom';
import GolfContext from '../GolfContext';
import PropTypes from 'prop-types' 

class AllScores extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    

    static contextType = GolfContext;

    onDelete = () => {
        this.props.history.push('/all-scores/:courseId')
      }
    
    getScoresForCourse = (scores=[], courseId) => (
        (!courseId)
            ? scores
            : scores.filter(score => score.course_id === JSON.parse(courseId))
    )

    render() {
        const { courseId } = this.props.match.params
        const { scores=[] } = this.context
        const scoresForCourse = this.getScoresForCourse(scores, courseId)
        return (
            <div className="AllScores">
                <div className="CourseName">
                    {scoresForCourse.map(score => <h2>{score.course}</h2>)}
                </div>
                <ul className="AllScores_list">
                    {scoresForCourse.map(score =>
                    <li key={score.id}>
                        <ScoresPage
                            id={score.id}
                            name={score.name}
                            total_score={score.total_score}
                            to_par={score.to_par}
                            date_modified={score.date_modified}
                            delete= {this.onDelete}
                        />
                        <Link to={`/course-score/${score.id}`}>
                            View 
                        </Link>
                    </li>
                    )}
                </ul>
                <Link to={`/add-score-page/${courseId}`}>
                    Add Score
                </Link>
            </div>
        );
    }
}

AllScores.propTypes = {
    match: PropTypes.object
  };

export default AllScores;