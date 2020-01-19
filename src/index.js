import React, { useState } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { useGesture } from "react-use-gesture";
import styled, { ThemeProvider } from "styled-components";
import { Header, MaterialVariants } from "@jksaunders/bonfire";

import { AppRouter } from "./components";

const contentWidth = "192px";

const StyledHeader = styled(Header)`
  padding: 8px ${contentWidth};
`;

const AppHeader = ({
  // eslint-disable-next-line react/prop-types
  history,
  // eslint-disable-next-line react/prop-types
  showFloatingHeader
}) => (
  <StyledHeader
    background={{
      backgroundColor: "white"
    }}
    buttons={[
      {
        text: "Donate",
        onClick: () => {},
        background: "rgb(0,0,0)",
        borderRadius: "0.25em",
        padding: "4px",
        typography: { ...MaterialVariants.ButtonText, bold: true },
        width: "100px"
      }
    ]}
    items={[
      // eslint-disable-next-line react/prop-types
      { text: "Programs", onClick: () => history.push(AppRouter.ROUTES.PROGRAMS) },
      // eslint-disable-next-line react/prop-types
      { text: "About Us", onClick: () => history.push(AppRouter.ROUTES.ABOUT) },
      { text: "Events", onClick: () => {} },
      { text: "Contact Us", onClick: () => {} }
    ]}
    height="125px"
    // eslint-disable-next-line react/prop-types
    logo={{ image: "https://kidsupfront.com/wp-content/uploads/2019/01/KUF-Color-150.png", onClick: () => history.push(AppRouter.ROUTES.HOME) }}
    variant={Header.CONSTANTS.VARIANT.FULL}
    showFloatingHeader={showFloatingHeader}
  />
);

const AppHeaderWithRouter = withRouter(AppHeader);

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
        <AppHeaderWithRouter showFloatingHeader={showFloatingHeader} />
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