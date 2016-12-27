/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectLogin from './selectors';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import messages from './messages';

import styled from 'styled-components';
import { Button, Card, Container, Form } from 'semantic-ui-react';

const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { formatMessage } = this.props.intl;

    return (
      <LoginWrapper>
        <Helmet
          title={formatMessage(messages.title)}
          meta={[
            { name: 'description', content: formatMessage(messages.header) },
          ]}
        />
        <Container>
          <Card centered>
            <Card.Content>
              <Card.Header>
                <FormattedMessage {...messages.header} />
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Form>
                <Form.Input placeholder={formatMessage(messages.emailPlaceholder)} />
                <Form.Input placeholder={formatMessage(messages.passwordPlaceholder)} type="password" />
                <Button type="submit" color="teal" fluid>
                  <FormattedMessage {...messages.submitButton} />
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Container>
      </LoginWrapper>
    );
  }
}

Login.propTypes = {
  intl: intlShape.isRequired,
};

const mapStateToProps = selectLogin();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Login));
