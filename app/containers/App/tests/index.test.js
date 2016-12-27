import App from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';

describe('<App />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have an <Helmet/>', () => {
    const renderedComponent = shallow(<App></App>);
    expect(renderedComponent.find(Helmet).length).toEqual(1);
  });
});
