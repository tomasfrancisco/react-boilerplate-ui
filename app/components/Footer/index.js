import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Footer() {
  return (
    <div>
      <Divider />
      <Container textAlign="center">
        <p>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <a href="https://twitter.com/ttomasfrancisco" target="_blank">Tomás Francisco</a>,
            }}
          />
        </p>
      </Container>
      <Divider hidden />
    </div>
  );
}

export default Footer;
