/**
 * Testing the NotFoundPage
 */

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import NotFound from '../index';
import { Message } from 'semantic-ui-react';

describe('<NotFound />', () => {
  it('should render a <Message/>', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    expect(renderedComponent.find(Message).length).toEqual(1);
  });
});
