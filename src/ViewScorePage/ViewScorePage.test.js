import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ViewScorePage from './ViewScorePage'

describe(`ViewScorePage component`, () => {
  const props = {
    score: {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Golf Course Score One",
        "course": "Golf Course",
        "score_hole_one": "3", 
        "score_hole_two": "4", 
        "score_hole_three": "5",
        "score_hole_four": "4",
        "score_hole_five": "5", 
        "score_hole_six": "6", 
        "score_hole_seven": "2",
        "score_hole_eight": "4",
        "score_hole_nine": "4",
        "score_hole_ten": "5",
        "score_hole_eleven": "5", 
        "score_hole_twelve": "5",
        "score_hole_thirteen": "4",
        "score_hole_fourteen": "4", 
        "score_hole_fifteen": "4", 
        "score_hole_sixteen": "4",
        "score_hole_seventeen": "4", 
        "score_hole_eighteen": "4",
        "total_score": "80",
        "to_par": "+8"
        },
  }

  it('renders a .ViewScorePage by default', () => {
    const wrapper = shallow(<ViewScorePage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a Score with score prop', () => {
    const score = shallow(<ViewScorePage {...props} />)
      .find('Score')
    expect(toJson(score)).toMatchSnapshot()
  })
})