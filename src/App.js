import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../src/NavBar/NavBar'
import LandingPage from '../src/LandingPage/LandingPage'
import SignUpPage from '../src/SignUpPage/SignUpPage'
import ViewCourseList from '../src/ViewCourseList/ViewCourseList'
import CourseItem from '../src/CourseItem/CourseItem'
import AllScores from '../src/AllScores/AllScores'
import ViewScorePage from '../src/ViewScorePage/ViewScorePage'
import AddScore from '../src/AddScore/AddScore'
import AddCourse from '../src/AddCourse/AddCourse'
import EditScore from '../src/EditScore/EditScore'
import EditCourse from '../src/EditCourse/EditCourse'
import GolfContext from '../src/GolfContext/GolfContext'

class App extends Component {
  state = {
    scores: [],
    courses: [],
    newCourse: {
      name: {
        hasError: false,
        touched: false,
        value: '',
      },
      location: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_distance: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_one: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_two: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_three: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_four: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_five: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_six: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_seven: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_eight: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_nine: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_ten: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_eleven: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_twelve: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_thirteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_fourteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_fifteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_sixteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_seventeen: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_par_hole_eighteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_summary: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_url: {
        hasError: false,
        touched: false,
        value: ''
      },
    },
    newScore: {
      name: {
        hasError: false,
        touched: false,
        value: ''
      },
      course: {
        hasError: false,
        touched: false,
        value: ''
      },
      course_id: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_one: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_two: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_three: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_four: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_five: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_six: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_seven: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_eight: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_nine: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_ten: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_eleven: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_twelve: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_thirteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_fourteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_fifteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_sixteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_seventeen: {
        hasError: false,
        touched: false,
        value: ''
      },
      score_hole_eighteen: {
        hasError: false,
        touched: false,
        value: ''
      },
      total_score: {
        hasError: false,
        touched: false,
        value: ''
      },
      to_par: {
        hasError: false,
        touched: false,
        value: ''
      }
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/scores`), 
      fetch(`${config.API_ENDPOINT}/api/courses`), 
    ])
      .then(([scoresRes, coursesRes]) => {
        if (!scoresRes.ok) return scoresRes.json().then(e => Promise.reject(e))
        if (!coursesRes.ok) return coursesRes.json().then(e => Promise.reject(e))

        return Promise.all([scoresRes.json(), coursesRes.json()])
      })
      .then(([scores, courses]) => {
        this.setState({ scores, courses })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  updateNewCourseData = (input, value) => {
    this.setState({
      newCourse: {
          ...this.state.newCourse,
        [input]: {
          hasError: false,
          touched: true,
          value: value,
        },
      },
    })
  }

  updateNewScoreData = (input, value) => {
    this.setState({
      newScore: {
          ...this.state.newScore,
        [input]: {
          hasError: false,
          touched: true,
          value: value,
        },
      },
    })
  }

  handleAddCourse = newCourse => {
    this.setState({
      courses: [...this.state.courses, newCourse],
    })
  }

  handleAddScore = score => {
    this.setState({
      scores: [...this.state.scores, score],
    })
  }

  handleDeleteCourse = courseId => {
    this.setState({
      courses: this.state.courses.filter(course => course.id !== courseId),
    })
  }

  handleDeleteScore = scoreId => {
    this.setState({
      scores: this.state.scores.filter(score => score.id !== scoreId),
    })
  }

  updateCourse = updatedCourse => {
    this.setState({
      courses: this.state.courses.map(course =>
        (course.id !== updatedCourse.id) ? course : updatedCourse
      )
    })
  }

  updateScore = updatedScore => {
    this.setState({
      scores: this.state.scores.map(score =>
        (score.id !== updatedScore.id) ? score : updatedScore
      )
    })
  }


  render() {  
    console.log(this.state);
    const value = {
      scores: this.state.scores,
      courses: this.state.courses,
      newScore: this.state.newScore,
      newCourse: this.state.newCourse,
      deleteScore: this.handleDeleteScore,
      deleteCourse: this.handleDeleteCourse,
      addScore: this.handleAddScore,
      addCourse: this.handleAddCourse,
      updateNewScoreData: this.updateNewScoreData,
      updateNewCourseData: this.updateNewCourseData,
      updateScore: this.updateScore,
      updateCourse: this.updateCourse,
    }
  return (
    <GolfContext.Provider value={value}>
      <main className='App'>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/sign-up-page" component={SignUpPage} />
        <Route path="/add-score-page" component={AddScore} />
        <Route path="/add-course-page" component={AddCourse} />
        <Route path="/edit-course-page" component={EditCourse} />
        <Route path="/edit-score-page" component={EditScore} />
        <Route path="/view-course-list" render={() => <ViewCourseList info={this.props.info} />} />
        <Route path="/course-page/:courseId" render={(props) => <CourseItem {...props} info={this.props.info} />} />
        <Route path="/all-scores/:courseId" render={(props) => <AllScores {...props} scores={this.props.scores} />} />
        <Route path="/course-score/:scoreId" render={(props) => <ViewScorePage {...props} scores={this.props.scores} />} />
      </main>
    </GolfContext.Provider>
  );
  }
}

export default App;