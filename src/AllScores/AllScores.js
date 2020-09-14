import React, { Component } from 'react';
import './AllScores.css';
import ScoresPage from '../ScoresPage/ScoresPage'
import { Link } from 'react-router-dom';
import GolfContext from '../GolfContext'

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
        console.log(`${courseId}`)
        return (
            <div className="AllScores">
                <ul className="AllScores_list">
                    {scoresForCourse.map(score =>
                    <li key={score.id}>
                        <h2 className="CourseName">
                            {score.course}
                        </h2>
                        <ScoresPage
                            id={score.id}
                            name={score.name}
                            total_score={score.total_score}
                            to_par={score.to_par}
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