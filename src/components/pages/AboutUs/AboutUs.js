import React from "react";
import styled from "styled-components";
import { Bar, Typography } from "@jksaunders/bonfire";
import { Profiles } from "./components";

const StyledBar = styled(Bar)`
  align-items: center;
  display: flex;
  ${props => `flex-direction: ${props.direction || "column"}`}
  justify-content: center;
  padding: 0px 8%;
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 32px;
`;

const AboutUs = () => (
  <>
    <StyledBar
      backgroundColor="white"
    >
      <Content>
        <Typography.H2>Debra Dynes Family House</Typography.H2>
      </Content>
      <Typography.Body1>
          Debra Dynes Family House is a multiservice community resources center in a low-income
          social housing area. Over 100 people per day from a wide geographic area access our
          programs and services!
      </Typography.Body1>
    </StyledBar>
    <StyledBar
      backgroundColor="white"
    >
      <Content><Typography.H2>Meet The Team</Typography.H2></Content>
      <Content>
        <Typography.H5>
          The Debra Dynes team loves everyone and thinks that they&apos;re super cool.
          Great job y&apos;all.
        </Typography.H5>
      </Content>
    </StyledBar>
    <Profiles />
    <StyledBar
      backgroundColor="#efefef"
    >
      <Content><Typography.H2>Contact Us</Typography.H2></Content>
    </StyledBar>
  </>
);

export default AboutUs;