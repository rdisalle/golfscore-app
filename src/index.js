import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const INFO = [
  {"name":"East Lake Golf Course","location":"Atlanta, GA","courseDistance":"6,452 yds","coursePar":"72",
    "courseParHoleOne":"5","courseParHoleTwo":"3","courseParHoleThree":"4","courseParHoleFour":"4","courseParHoleFive":"4",
    "courseParHoleSix":"5","courseParHoleSeven":"4","courseParHoleEight":"4","courseParHoleNine":"3", "courseParHoleTen":"4",
    "courseParHoleEleven":"3","courseParHoleTwelve":"4","courseParHoleThirteen":"4","courseParHoleFourteen":"5","courseParHole15":"3",
    "courseParHoleSixteen":"4","courseParHoleSeventeen":"4","courseParHoleEighteen":"5","courseSummary":"Established in 1904, East Lake is the oldest golf course in the city of Atlanta. Tom Bendelow was the original course architect however in 1913 the course was completely reworked by the classicist Donald Ross, whose layout survives as the basic design today. In 1994, Rees Jones, son of the famed golf course architect Robert Trent Jones, restored Donald Ross’s original golf course design at East Lake to its current layout today.",
    "courseURL":"https://www.eastlakegolfclub.com/golf/golf-course-information/",  },
    {"name":"Fox Creek Golf Club","location":"Smyrna, GA","courseDistance":"3,892 yds","coursePar":"62",
    "courseParHoleOne":"4","courseParHoleTwo":"3","courseParHoleThree":"4","courseParHoleFour":"3","courseParHoleFive":"3",
    "courseParHoleSix":"5","courseParHoleSeven":"3","courseParHoleEight":"3","courseParHoleNine":"4", "courseParHoleTen":"3",
    "courseParHoleEleven":"4","courseParHoleTwelve":"3","courseParHoleThirteen":"3","courseParHoleFourteen":"4","courseParHole15":"3",
    "courseParHoleSixteen":"4","courseParHoleSeventeen":"3","courseParHoleEighteen":"3","courseSummary":"Designed by famed designer John LaFoy, Fox Creek Golf Club’s beautiful Par 62 golf course is nestled in the historic city of Smyrna and surrounded by towering Georgia pines. The course features Champion Bermuda grass greens and is a fun place to play and practice for golfers of all skill levels and ages. Short on time? Fox Creek’s executive style layout offers a quick round of golf to fit your busy schedule.",
    "courseURL":"https://www.legacyfoxcreek.com/fox-creek-golf-club/",  },
    {"name":"Marietta City Club","location":"Mariettaa, GA","courseDistance":"5,721 yds","coursePar":"71",
    "courseParHoleOne":"4","courseParHoleTwo":"4","courseParHoleThree":"3","courseParHoleFour":"5","courseParHoleFive":"4",
    "courseParHoleSix":"4","courseParHoleSeven":"3","courseParHoleEight":"5","courseParHoleNine":"4", "courseParHoleTen":"4",
    "courseParHoleEleven":"4","courseParHoleTwelve":"3","courseParHoleThirteen":"4","courseParHoleFourteen":"5","courseParHole15":"4",
    "courseParHoleSixteen":"4","courseParHoleSeventeen":"3","courseParHoleEighteen":"4","courseSummary":"Prepare yourself for an unparalleled golfing experience on City Club Marietta's mountainous course. Our course is a pleasure for golfers of any skill level to play. Marietta golf will challenge you while providing a relaxing, picturesque backdrop.  Test your accuracy with our fairways, water hazards and sand traps; we have everything you need to challenge you and improve your game. All in all, our goal is to provide you with a quality experience that includes exceptional service and a comfortable atmosphere.",
    "courseURL":"https://www.cityclubmarietta.com/golf-course",  },
];

ReactDOM.render(
  <BrowserRouter>
    <App info={INFO}/>
  </BrowserRouter>,
  document.getElementById('root'));