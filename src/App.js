import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { summaryDonations } from './helpers';

import { DonateCard } from './component/donate-card/donate-card';
import { StickyCard } from './component/sticky-card/sticky-card';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 64px;
  @media (max-width: 1272px) {
    grid-template-columns: 1fr;
  }
`;

const Page = styled.div`
  text-align: center;
  padding: 32px;
`

const Theme = styled.span`
  --font-color-primary: rgba(69, 69, 245, 1);
  --border-primary: rgba(69, 69, 245, 1);
  --button-shadow-primary: rgba(27, 27, 218, 0.29);
  --button-disable-primary: rgba(76, 76, 198, 0.33);
`

const Header = styled.h1`
  font-family: Sans-serif;
  color: gray;
  margin-bottom: 42px;
`

export default connect((state) => state)(
  class App extends Component {
    state = {
      charities: [],
      selectedAmount: 10,
    };
    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          self.setState({ charities: data });
        });

      fetch('http://localhost:3001/payments')
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => item.amount)),
          });
        });
    }

    render() {
      const self = this;
      const cards = this.state.charities.map(function (item, i) {
        return (
          <DonateCard item={item} state={self.state} appProps={self.props} />
        );
      });

      const donate = this.props.donate;

      return (
        <Theme>
          <StickyCard text={<>All donating : <b>{donate}</b></>} />
          <Page>
            <Header>Omise Tamboon React</Header>
            <Grid>
              {cards}
            </Grid>
          </Page>
        </Theme>
      );
    }
  }
);
