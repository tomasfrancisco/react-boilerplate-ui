import NavBar from '../index';

import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { IntlProvider } from 'react-intl';

describe('<NavBar />', () => {
  it('Should render a <Menu /> ', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NavBar />
      </IntlProvider>);
    expect(renderedComponent.find(Menu).length).toEqual(1);
  });
});
