import React, { Component } from 'react';
import './AllScores.css';
import ScoresPage from '../ScoresPage/ScoresPage';
import { Link } from 'react-router-dom';
import GolfContext from '../GolfContext';
import PropTypes from 'prop-types' ;

class AllScores extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      };
    

    static contextType = GolfContext;

    onDelete = () => {
        const { courseId } = this.props.match.params;
        this.props.history.push(`/all-scores/${courseId}`);
      };
    
    getScoresForCourse = (scores=[], courseId) => (
        (!courseId)
            ? scores
            : scores.filter(score => score.course_id === JSON.parse(courseId))
    );

    findCourse = (courses=[], courseId) =>
    courses.find(course => course.id === JSON.parse(courseId));

    render() {
        const { courseId } = this.props.match.params;
        const { scores=[] } = this.context;
        const scoresForCourse = this.getScoresForCourse(scores, courseId);
        const { courses } = this.context;
        const course = this.findCourse(courses, courseId) || { content: '' };
        return (
            <div className="AllScores"> 
                <h2 className="AllScores_course">
                    {course.name}
                </h2>
                <Link className="AllScores_add" to={`/add-score-page/${courseId}`}>
                    Add Score
                </Link>
                <ul className="AllScores_list">  
                    {scoresForCourse.map(score =>
                    <li className="AllScores_score" key={score.id}>
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
                            date_modified={score.date_modified}
                            delete= {this.onDelete}
                        />
                        <Link className="AllScores_viewLink" to={`/course-score/${score.id}`}>
                            View 
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
        );
    };
};

AllScores.propTypes = {
    match: PropTypes.object
  };

export default AllScores;