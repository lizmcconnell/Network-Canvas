/* eslint-env jest */

import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import Alphanumeric from '../Alphanumeric';

const setup = (props) => {
  const mockProps = {
    label: 'Alphanumeric',
    meta: {
      invalid: true,
      error: 'an error message',
    },
    ...props,
  };

  const component = shallow((
    <Alphanumeric store={createStore(() => {})} {...mockProps} />
  ));

  return component;
};

describe('<Alphanumeric />', () => {
  it('should render', () => {
    const subject = setup();

    expect(subject).toMatchSnapshot();
  });
});
