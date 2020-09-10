import React, { Component } from 'react';
import './ScoresPage.css';
import { Link } from 'react-router-dom';

class ScoresPage extends Component {
  render() {
    return (
      <div className="ScoresItem">
        <div className="scoresInfo">
          <div className="ScoreItem__name">{this.props.name}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleOne}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleTwo}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleThree}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleFour}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleFive}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleSix}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleSeven}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleEight}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleNine}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleTen}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleEleven}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleTwele}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleThirteen}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleFourteen}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleFifteen}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleSixteen}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleSeventeen}</div>
          <div className="ScoreItem__scoreHoleOne">{this.props.scoreHoleEighteen}</div>
          <div className="ScoreItem__totalScore">{this.props.totalScore}</div>
          <div className="ScoreItem__toPar">{this.props.toPar}</div>
        </div>
        <div className="ScoresItem_commands">
          <Link to={`/course-score/${this.props.scoreNumber}`}>
            View 
          </Link>
          <Link to={'/edit-score-page'}>
                Edit Score
            </Link>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default ScoresPage;