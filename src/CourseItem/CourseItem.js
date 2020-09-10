import React, { Component } from 'react';
import './CourseItem.css';
import CoursePage from '../CoursePage/CoursePage'

class CourseItem extends Component {
  render() {
    const course = this.props.info
        .filter(myCourse => myCourse.name === decodeURI(this.props.match.params.courseId))
    return (
      <ul>
        {course.map((myCourse, index) =>
          <li key={index}>
            <CoursePage
              name={myCourse.name}
              location={myCourse.location}
              courseDistance={myCourse.courseDistance}
              coursePar={myCourse.coursePar}
              courseParHoleOne={myCourse.courseParHoleOne}
              courseParHoleTwo={myCourse.courseParHoleTwo}
              courseParHoleThree={myCourse.courseParHoleThree}
              courseParHoleFour={myCourse.courseParHoleFour}
              courseParHoleFive={myCourse.courseParHoleFive}
              courseParHoleSix={myCourse.courseParHoleSix}
              courseParHoleSeven={myCourse.courseParHoleSeven}
              courseParHoleEight={myCourse.courseParHoleEight}
              courseParHoleNine={myCourse.courseParHoleNine}
              courseParHoleTen={myCourse.courseParHoleTen}
              courseParHoleEleven={myCourse.courseParHoleEleven}
              courseParHoleTwelve={myCourse.courseParHoleTwelve}
              courseParHoleThirteen={myCourse.courseParHoleThirteen}
              courseParHoleFourteen={myCourse.courseParHoleFourteen}
              courseParHoleFifteen={myCourse.courseParHoleFifteen}
              courseParHoleSixteen={myCourse.courseParHoleSixteen}
              courseParHoleSeventeen={myCourse.courseParHoleSeventeen}
              courseParHoleEighteen={myCourse.courseParHoleEighteen}
              courseSummary={myCourse.courseSummary}
              courseURL={myCourse.courseURL}
            />
          </li>
        )}
      </ul>
    );
  }
}

export default CourseItem;