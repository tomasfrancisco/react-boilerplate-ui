/*
 *
 * Signup
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectSignup from './selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styled from 'styled-components';
import { Button, Card, Container, Form } from 'semantic-ui-react';

const SignupWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export class Signup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SignupWrapper>
        <Helmet
          title="Signup"
          meta={[
            { name: 'description', content: 'Description of Signup' },
          ]}
        />
        <Container>
          <Card centered>
            <Card.Content>
              <Card.Header>
                Create new account
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Form>
                <Form.Input placeholder="E-Mail" />
                <Form.Input placeholder="Password" type="password" />
                <Button type="submit" color="teal" fluid>Submit</Button>
              </Form>
            </Card.Content>
          </Card>
        </Container>
      </SignupWrapper>
    );
  }
}

const mapStateToProps = selectSignup();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
