import React from 'react';
import { Typography, MaterialVariants, Layout } from '@jksaunders/bonfire';
import * as Spacing from '@design/Spacing';
import { Profiles } from './components';

// eslint-disable-next-line react/prop-types
const Content = ({ children }) => (
  <Layout
    background="rgba(255, 255, 255, 0.7)"
    padding={Spacing.largePx}
    width="max-content"
  >
    {children}
  </Layout>
);

const Description = () => (
  <Layout centered column padding="0px 8%">
    <Content>
      <Typography variant={MaterialVariants.H2}>
        Debra Dynes Family House
      </Typography>
    </Content>
    <Typography variant={MaterialVariants.Body1}>
      Debra Dynes Family House is a multiservice community resources center in a
      low-income social housing area. Over 100 people per day from a wide
      geographic area access our programs and services!
    </Typography>
  </Layout>
);

const MeetTheTeam = () => (
  <>
    <Layout centered>
      <Content>
        <Typography variant={MaterialVariants.H2}>Meet The Team</Typography>
      </Content>
      <Content>
        <Typography variant={MaterialVariants.H5}>
          The Debra Dynes team loves everyone and thinks that they&apos;re super
          cool. Great job y&apos;all.
        </Typography>
      </Content>
    </Layout>
    <Profiles />
  </>
);

const ContactUs = () => (
  <Layout background="#efefef" centered>
    <Content>
      <Typography variant={MaterialVariants.H2}>Contact Us</Typography>
    </Content>
  </Layout>
);

const AboutUs = () => (
  <Layout
    background="linear-gradient(180deg, white 0%, #efefef 100%)"
    gap={Spacing.largePx}
  >
    <Description />
    <MeetTheTeam />
    <ContactUs />
  </Layout>
);

export default AboutUs;
