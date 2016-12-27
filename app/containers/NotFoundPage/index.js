/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import styled from 'styled-components';
import messages from './messages';
import { Icon, Message } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

const NotFoundPageWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 10%;
`;

export default function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <Message color="yellow" compact icon>
        <Icon name="warning sign" />
        <Message.Content>
          <Message.Header>
            <FormattedMessage {...messages.header} />
          </Message.Header>
          <FormattedMessage {...messages.description} />
        </Message.Content>
      </Message>
    </NotFoundPageWrapper>
  );
}
