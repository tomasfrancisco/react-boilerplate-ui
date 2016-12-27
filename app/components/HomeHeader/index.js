/**
*
* HomeHeader
*
*/

import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';

import { intlShape, injectIntl } from 'react-intl';
import messages from './messages';

class HomeHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>
            {formatMessage(messages.homepageTitle)}
          </Header.Content>
        </Header>
        <Image centered size="large" src="http://semantic-ui.com/images/wireframe/centered-paragraph.png" />
      </div>
    );
  }
}

HomeHeader.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HomeHeader);
