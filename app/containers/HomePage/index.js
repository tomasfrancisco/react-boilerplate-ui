/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import HomeHeader from 'components/HomeHeader/index';
import Footer from 'components/Footer';

const HomePageWrapper = styled.div`
  height: 100%;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HomePageWrapper>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <HomeHeader />
        <Footer />
      </HomePageWrapper>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
