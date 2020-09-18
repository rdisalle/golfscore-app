import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ScoresPage from './ScoresPage'

describe(`ScoresPage component`, () => {
  const props = {
    id: 1,
    name: 'test-class-name',
    date_modified: new Date('2020-01-22T16:28:32.615Z'),
  }

  it('renders the ScoresPage given props', () => {
    const wrapper = shallow(<ScoresPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
