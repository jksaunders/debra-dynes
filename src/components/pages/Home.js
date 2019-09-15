import React from "react";
import styled from "styled-components";
import { Bar, Typography } from "@jksaunders/bonfire";

const StyledBar = styled(Bar)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 32px;
`;

const Home = () => (
  <React.Fragment>
    <StyledBar backgroundUrl="https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80">
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
    <StyledBar>
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
    <StyledBar backgroundUrl="https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80">
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
    <StyledBar>
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
    <StyledBar backgroundUrl="https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80">
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
    <StyledBar>
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
    <StyledBar backgroundUrl="https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80">
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
    <StyledBar>
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
    <StyledBar backgroundUrl="https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80">
      <Content><Typography.H2>bar content</Typography.H2></Content>
    </StyledBar>
  </React.Fragment>
);

export default Home;