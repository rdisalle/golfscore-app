import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ScoresPage from './ScoresPage'

describe(`ScoresPage component`, () => {
  const props = {
    id: 1,
    name: 'test-class-name',
  }

  it('renders a .ScoresPage by default', () => {
    const wrapper = shallow(<ScoresPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the ScoresPage given props', () => {
    const wrapper = shallow(<ScoresPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
