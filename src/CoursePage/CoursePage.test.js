import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CoursePage from './CoursePage';

describe(`CoursePage component`, () => {
  const props = {
    id: 1,
    name: 'test-class-name',
  };

  it('renders a .CoursePage by default', () => {
    const wrapper = shallow(<CoursePage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the CoursePage given props', () => {
    const wrapper = shallow(<CoursePage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});