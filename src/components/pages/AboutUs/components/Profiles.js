import React from 'react';
import { Layout } from '@jksaunders/bonfire';
import * as Spacing from '@design/Spacing';
import UserCard from './UserCard';

const KaviProfile = () => (
  <UserCard
    bodyText="Kavi is cool and has a super cool car and she doesn't like anyone who drives recklessly around it. She is calm and collected all of the time and abhors yelling of any kind."
    image="https://i.ytimg.com/vi/6XP_2rlMd0M/hqdefault.jpg"
    maxWidth="200px"
    name="Kavi Mohammed"
  />
);

const BarbaraProfile = () => (
  <UserCard
    bodyText="Barbara calls the shots and puts in a lot of time into Debra Dynes Family House. She has a lot of cool innovative ideas and is a firm believer that knitting is a form of coding."
    image="https://postmediaottawacitizen2.files.wordpress.com/2014/10/barbara-carroll-is-a-candidate-in-river-ward.jpg"
    maxWidth="200px"
    name="Barbara Carroll"
  />
);

const JordynProfile = () => (
  <UserCard
    bodyText="Jordyn is the best in west and an all-around stand-up gal. Likes Big Brother. Her ideal workspace is a mountain and also not working."
    image="https://media.licdn.com/dms/image/C5603AQGujtifPwLPLw/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=tiRVd1TyyNSpsHnNgSeO1hR1zY7Y2EIo5YmLbmIRMi0"
    maxWidth="200px"
    name="Jordyn Saunders"
  />
);

const Profiles = () => (
  <Layout
    align="content-center items-start"
    columns="max-content"
    row
    gap={Spacing.largePx}
  >
    <KaviProfile />
    <BarbaraProfile />
    <JordynProfile />
  </Layout>
);

export default Profiles;
