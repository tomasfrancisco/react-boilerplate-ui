import expect from 'expect';
import React from 'react';
import HomeHeader from '../index';
import { Header } from 'semantic-ui-react';
import { mountWithIntl, shallowWithIntl } from '../../../helpers/intl-test';

describe('<HomeHeader />', () => {
  it('should render an <Header />', () => {
    const renderedComponent = mountWithIntl(
      <HomeHeader />
    );
    expect(renderedComponent.find(Header).length).toEqual(1);
  });

  describe('injectIntl', () => {
    it('should be injected', () => {
      const renderedComponent = shallowWithIntl(
        <HomeHeader />
      );
      expect(renderedComponent.props().intl).toExist();
    });
  });
});
