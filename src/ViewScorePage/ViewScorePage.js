import React, { Component } from 'react';
import './ViewScorePage.css';
import ScoresPage from '../ScoresPage/ScoresPage'
import GolfContext from '../GolfContext'
import PropTypes from 'prop-types' 

class ViewScorePage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      };

    static contextType = GolfContext;

    onDelete = () => {
        this.props.history.push('/all-scores/:courseId')
      }

    findScore = (scores=[], scoreId) =>
    scores.find(score => score.id === JSON.parse(scoreId))

  render() {
    const { scores } = this.context
    const { scoreId } = this.props.match.params
    const score = this.findScore(scores, scoreId) || { content: '' }

    return (
        <section className="ViewScorePage">
            <h2 className="CourseName">
                {score.course}
            </h2>
            <ScoresPage
                id={score.id}
                name={score.name}
                score_hole_one={score.score_hole_one}
                score_hole_two={score.score_hole_two}
                score_hole_three={score.score_hole_three}
                score_hole_four={score.score_hole_four}
                score_hole_five={score.score_hole_five}
                score_hole_six={score.score_hole_six}
                score_hole_seven={score.score_hole_seven}
                score_hole_eight={score.score_hole_eight}
                score_hole_nine={score.score_hole_nine}
                score_hole_ten={score.score_hole_ten}
                score_hole_eleven={score.score_hole_eleven}
                score_hole_twelve={score.score_hole_twelve}
                score_hole_thirteen={score.score_hole_thirteen}
                score_hole_fourteen={score.score_hole_fourteen}
                score_hole_fifteen={score.score_hole_fifteen}
                score_hole_sixteen={score.score_hole_sixteen}
                score_hole_seventeen={score.score_hole_seventeen}
                score_hole_eighteen={score.score_hole_eighteen}
                total_score={score.total_score}
                to_par={score.to_par} 
                delete= {this.onDelete}
            />
        </section>
    );
  }
}

ViewScorePage.propTypes = {
    match: PropTypes.object
  };

export default ViewScorePage;