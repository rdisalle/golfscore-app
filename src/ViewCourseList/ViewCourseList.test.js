import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ViewCourseList from './ViewCourseList'

describe(`ViewCourseList component`, () => {
  const props = {
    courses: [
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": 'My course',
        "location": "Atanta, Ga",
        "course_distance": "5,000 yds",
        "course_par": "72",
        "course_par_hole_one": "3", 
        "course_par_hole_two": "4", 
        "course_par_hole_three": "5",
        "course_par_hole_four": "4",
        "course_par_hole_five": "5", 
        "course_par_hole_six": "6", 
        "course_par_hole_seven": "2",
        "course_par_hole_eight": "4",
        "course_par_hole_nine": "4",
        "course_par_hole_ten": "5",
        "course_par_hole_eleven": "5", 
        "course_par_hole_twelve": "5",
        "course_par_hole_thirteen": "4",
        "course_par_hole_fourteen": "4", 
        "course_par_hole_fifteen": "4", 
        "course_par_hole_sixteen": "4",
        "course_par_hole_seventeen": "4", 
        "course_par_hole_eighteen": "4",
        "course_summary": "This is my new course",
        "course_url": "www.mycourse.com"
      },
      {
        "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": 'My course 2',
        "location": "Atanta, Ga",
        "course_distance": "5,000 yds",
        "course_par": "72",
        "course_par_hole_one": "3", 
        "course_par_hole_two": "4", 
        "course_par_hole_three": "5",
        "course_par_hole_four": "4",
        "course_par_hole_five": "5", 
        "course_par_hole_six": "6", 
        "course_par_hole_seven": "2",
        "course_par_hole_eight": "4",
        "course_par_hole_nine": "4",
        "course_par_hole_ten": "5",
        "course_par_hole_eleven": "5", 
        "course_par_hole_twelve": "5",
        "course_par_hole_thirteen": "4",
        "course_par_hole_fourteen": "4", 
        "course_par_hole_fifteen": "4", 
        "course_par_hole_sixteen": "4",
        "course_par_hole_seventeen": "4", 
        "course_par_hole_eighteen": "4",
        "course_summary": "This is my new course",
        "course_url": "www.mycourse.com"
      },
      {
        "id": "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": 'My course 3',
        "location": "Atanta, Ga",
        "course_distance": "5,000 yds",
        "course_par": "72",
        "course_par_hole_one": "3", 
        "course_par_hole_two": "4", 
        "course_par_hole_three": "5",
        "course_par_hole_four": "4",
        "course_par_hole_five": "5", 
        "course_par_hole_six": "6", 
        "course_par_hole_seven": "2",
        "course_par_hole_eight": "4",
        "course_par_hole_nine": "4",
        "course_par_hole_ten": "5",
        "course_par_hole_eleven": "5", 
        "course_par_hole_twelve": "5",
        "course_par_hole_thirteen": "4",
        "course_par_hole_fourteen": "4", 
        "course_par_hole_fifteen": "4", 
        "course_par_hole_sixteen": "4",
        "course_par_hole_seventeen": "4", 
        "course_par_hole_eighteen": "4",
        "course_summary": "This is my new course",
        "course_url": "www.mycourse.com"
      },
      {
        "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": 'My course 4',
        "location": "Atanta, Ga",
        "course_distance": "5,000 yds",
        "course_par": "72",
        "course_par_hole_one": "3", 
        "course_par_hole_two": "4", 
        "course_par_hole_three": "5",
        "course_par_hole_four": "4",
        "course_par_hole_five": "5", 
        "course_par_hole_six": "6", 
        "course_par_hole_seven": "2",
        "course_par_hole_eight": "4",
        "course_par_hole_nine": "4",
        "course_par_hole_ten": "5",
        "course_par_hole_eleven": "5", 
        "course_par_hole_twelve": "5",
        "course_par_hole_thirteen": "4",
        "course_par_hole_fourteen": "4", 
        "course_par_hole_fifteen": "4", 
        "course_par_hole_sixteen": "4",
        "course_par_hole_seventeen": "4", 
        "course_par_hole_eighteen": "4",
        "course_summary": "This is my new course",
        "course_url": "www.mycourse.com"
      },
    ]
  }

  it('renders a .ViewCourseList by default', () => {
    const wrapper = shallow(<ViewCourseList />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a Course in ul for each course in array', () => {
    const ul = shallow(<ViewCourseList {...props} />)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})