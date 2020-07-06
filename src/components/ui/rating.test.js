import React from 'react';
import { shallow, mount } from 'enzyme';
import Rating from './rating2';
import { MemoryRouter } from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    rating: jest.fn(),
    ClickChangeRate: jest.fn(),
  };

  const enzymeWrapper = shallow(<Rating {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Rating', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(
      enzymeWrapper
        .find('label')
        .at(0)
        .hasClass('css-hn8do0')
    ).toBe(true);
  });

  it('should call addTodo if length of text is greater than 0', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('label').at(0);
    expect(props.ClickChangeRate.mock.calls.length).toBe(0);
    input.props().onClick();
    expect(props.ClickChangeRate.mock.calls.length).toBe(1);
  });
});
