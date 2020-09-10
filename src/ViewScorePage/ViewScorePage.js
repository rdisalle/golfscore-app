import React, { Component } from 'react';
import './ViewScorePage.css';
import ScoresPage from '../ScoresPage/ScoresPage'
import { Link } from 'react-router-dom';

class ViewScorePage extends Component {
  render() {
    console.log()
    const courseScore = this.props.scores
    .filter(myScore => myScore.scoreNumber === decodeURI(this.props.match.params.scoreId))
    return (
        <div>
            <ul>
                {courseScore.map((myScore, index) =>
                <li key={index}>
                      <ScoresPage
                        name={myScore.name}
                        scoreHoleOne={myScore.scoreHoleOne}
                        scoreHoleTwo={myScore.scoreHoleTwo}
                        scoreHoleThree={myScore.scoreHoleThree}
                        scoreHoleFour={myScore.scoreHoleFour}
                        scoreHoleFive={myScore.scoreHoleFive}
                        scoreHoleSix={myScore.scoreHoleSix}
                        scoreHoleSeven={myScore.scoreHoleSeven}
                        scoreHoleEight={myScore.scoreHoleEight}
                        scoreHoleNine={myScore.scoreHoleNine}
                        scoreHoleTen={myScore.scoreHoleTen}
                        scoreHoleEleven={myScore.scoreHoleEleven}
                        scoreHoleTwelve={myScore.scoreHoleTwelve}
                        scoreHoleThirteen={myScore.scoreHoleThirteen}
                        scoreHoleFourteen={myScore.scoreHoleFourteen}
                        scoreHoleFifteen={myScore.scoreHoleFifteen}
                        scoreHoleSixteen={myScore.scoreHoleSixteen}
                        scoreHoleSeventeen={myScore.scoreHoleSeventeen}
                        scoreHoleEighteen={myScore.scoreHoleEighteen}
                        totalScore={myScore.totalScore}
                        toPar={myScore.toPar} 
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

export default ViewScorePage;