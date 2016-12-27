/**
*
* NavBar
*
*/

import React from 'react';

import { Link } from 'react-router';
import { intlShape, injectIntl } from 'react-intl';
import messages from './messages';

import { Menu, Button } from 'semantic-ui-react';
import Logo from './logo.svg';

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Menu secondary>
        <Menu.Item as={Link} to="/">
          <img src={Logo} alt={this.props.intl.formatMessage(messages.home)} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="auth">
            <Button.Group basic>
              <Button as={Link} to="/login">
                {this.props.intl.formatMessage(messages.login)}
              </Button>
              <Button as={Link} to="/signup">
                {this.props.intl.formatMessage(messages.signup)}
              </Button>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

NavBar.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(NavBar);
