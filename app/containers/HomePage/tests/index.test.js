import { HomePage } from '../index';
import HomeHeader from 'components/HomeHeader/index';
import Footer from 'components/Footer/index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Helmet from 'react-helmet';

describe('<HomePage />', () => {
  it('should have an <Helmet/>', () => {
    const renderedComponent = shallow(<HomePage></HomePage>);
    expect(renderedComponent.find(Helmet).length).toEqual(1);
  });

  it('should have an <HomeHeader/>', () => {
    const renderedComponent = shallow(<HomePage></HomePage>);
    expect(renderedComponent.find(HomeHeader).length).toEqual(1);
  });

  it('should have a <Footer/>', () => {
    const renderedComponent = shallow(<HomePage></HomePage>);
    expect(renderedComponent.find(Footer).length).toEqual(1);
  });
});
