import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useGesture } from "react-use-gesture";
import styled, { ThemeProvider } from "styled-components";
import { Header, Bar, Typography } from "@jksaunders/bonfire";

import { AppRouter } from "./components";

const contentWidth = "192px";

const StyledHeader = styled(Header)`
  padding: 8px ${contentWidth};
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

const AppHeader = ({
  // eslint-disable-next-line react/prop-types
  showFloatingHeader
}) => (
  <StyledHeader
    background={{
      backgroundColor: "white"
    }}
    buttons={[
      { text: "Donate", onClick: () => {}, variant: Header.HeaderButton.CONSTANTS.VARIANT.PRIMARY }
    ]}
    items={[
      { text: "Programs", link: "https://google.com" },
      { text: "About Us", onClick: () => {} },
      { text: "Events", onClick: () => {} },
      { text: "Contact Us", onClick: () => {} }
    ]}
    height="125px"
    logo={{ image: "https://kidsupfront.com/wp-content/uploads/2019/01/KUF-Color-150.png" }}
    variant={Header.CONSTANTS.VARIANT.FULL}
    showFloatingHeader={showFloatingHeader}
  />
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

const AppBody = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  onScrollY
}) => {
  const bind = useGesture(
    {
      onScroll: scrollState => onScrollY(scrollState.xy[1]),
    },
    { event: { passive: false } }
  );

  return (
    <div {...bind()} style={{ height: "100vh", overflowY: "auto" }}>
      {children}
    </div>
  );
};

const App = () => {
  const [showFloatingHeader, setShowFloatingHeader] = useState(false);
  const headerHeight = 125;

  const checkScroll = (scrollY) => {
    if ((scrollY > headerHeight) !== showFloatingHeader) {
      setShowFloatingHeader(!showFloatingHeader);
    }
  };

  return (
    <AppBody onScrollY={checkScroll}>
      <AppRouter>
        <AppHeader showFloatingHeader={showFloatingHeader} />
        <Page />
      </AppRouter>
    </AppBody>
  );
};

ReactDOM.render(
  (
    <ThemeProvider theme={{ mode: "dark", layout: "compact" }}>
      <App />
    </ThemeProvider>
  ),
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);