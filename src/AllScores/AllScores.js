import React, { Component } from 'react';
import './AllScores.css';
import ScoresPage from '../ScoresPage/ScoresPage'
import { Link } from 'react-router-dom';

class AllScores extends Component {
  render() {
    const courseScore = this.props.scores
    .filter(myCourse => myCourse.name === decodeURI(this.props.match.params.courseId))
    return (
        <div>
            <ul>
                {courseScore.map((myCourse, index) =>
                <li key={index}>
                    <ScoresPage
                    name={myCourse.name}
                    totalScore={myCourse.totalScore}
                    toPar={myCourse.toPar}
                    scoreNumber={myCourse.scoreNumber}
                    />
                </li>
                )}
            </ul>
            <Link to={'/add-score-page'}>
                Add Score
            </Link>
        </div>
    );
  }
}

export default AllScores;