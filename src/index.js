import React from "react";
import ReactDOM from "react-dom";
// import { Redirect } from "react-router";
// import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header, Bar, Typography } from "@jksaunders/bonfire";

import { AppRouter } from "./components";

const contentWidth = "192px";

const StyledHeader = styled(Header)`
  padding: 0px ${contentWidth};
`;

const StyledBar = styled(Bar)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 32px;
`;

const AppHeader = () => (
  <StyledHeader>
    <Header.HeaderLogo image="https://kidsupfront.com/wp-content/uploads/2019/01/KUF-Color-150.png" maxHeight="80px" />
    <Header.HeaderItem text="Programs" />
    <Header.HeaderItem text="About Us" />
    <Header.HeaderItem text="Events" />
    <Header.HeaderItem text="Contact Us" />
    <Header.HeaderButton text="Donate" />
  </StyledHeader>
);

const Page = () => (
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
  </React.Fragment>
);

const App = () => (
  <AppRouter>
    <AppHeader />
    <Page />
  </AppRouter>
);

ReactDOM.render(
  (
    <ThemeProvider theme={{ mode: "dark", layout: "compact" }}>
      <App />
    </ThemeProvider>
  ),
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);