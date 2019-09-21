import React from "react";
import styled from "styled-components";
import { Bar, Typography } from "@jksaunders/bonfire";
import { ProgramSection } from "./components";

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

const Programs = () => (
  <React.Fragment>
    <StyledBar
      backgroundColor="white"
    >
      <Content>
        <Typography.H2>Programs</Typography.H2>
      </Content>
      <Typography.H5>
          We have a bunch of stellar programs that do a lot of good for a lot of people.
      </Typography.H5>
    </StyledBar>
    <ProgramSection
      title="Adults"
      description="Programs for adults!"
      programs={[
        {
          title: "Emergency Food Bank",
          description: "Provides a 3-day supply of emergency food one time per month. Please contact the Family House for more information on our current catchment area and how we can help if you are working or in school.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Freebie Friday",
          description: "Collected from donations and clothing drives, families are able to receive high-quality and gently used free clothing and small household items.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Prenatal Program: Starting String & Collective Kitchen",
          description: "This prenatal program works in partnership with Carlington Community Health Resources Center to support pregnant women and nursing mothers on a bi-monthly basis for health promotion and nutrition.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Community Computers",
          description: "Community access program that provides free computer and internet access, printing, scanning, faxing and photocopying.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Welcome Caregivers!",
          description: "A time to play, meet and support. The playroom is open for caregivers on a daily basis.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Sewing Program",
          description: "Run by community volunteers to provide participants with basic sewing skills, assisting in making and reparing clothes, and making household furnishing items.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        }
      ]}
    />
    <ProgramSection
      title="Youth"
      description="Programs for youth!"
      programs={[
        {
          title: "Community Computers",
          description: "Community access program that provides free computer and internet access, printing, scanning, faxing and photocopying.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "First Work Experience & Employment Training",
          description: "Partnering with several organizations to create skills training and employment experience for low income youth in the community in the summer vacation period. First Work Experience is a program designed by the Family House to assist Junior High youth who are too old for camp and too young for pre-employment training programs.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        }
      ]}
    />
    <ProgramSection
      title="Kids"
      description="Programs for kids!"
      programs={[
        {
          title: "Homework Club",
          description: "Provides homework support as well as computer access for homework with a priority for grades 1-6. There is a healthy snack provided.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Emergency Lunch Program",
          description: "Nutritional lunches provided each school day for families in need/crisis.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Holiday Gift Sales",
          description: "Gift sales allow for children to purchase small gift items for their parents at significant times during the year such as Mother's Day, Father's Day and Christmas. All donations are gladly accepted.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Ready For School",
          description: "Working with community partners, the Family House provides essential school supplies for children and youth at the beginning of the school year and in the New Year for semester students.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Seasonal Programming",
          description: "Working with the City Of Ottawa to create opportunities such as I Love To Skate, Play Soccer and I Love To Dance.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Summer Breakfast & Lunch Program",
          description: "Providing nutritional support each and every day of camp activities.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Summer Camps",
          description: "In partnership with Children's Village of Ottawa, children 5-7 and 8-12 years old attend a summer day camp for 2 week periods during July and August. \"Transitions\" is a unique approach to participating in camp. Children develop and plan their camp together. They learn skills, have fun, and develop self-confidence, independence and responsibility.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
      ]}
    />
    <ProgramSection
      title="Toddlers and Babies"
      description="Programs for toddlers and babies!"
      programs={[
        {
          title: "Emergency Baby Cupboard",
          description: "Assistance with items such as diapers, formula and baby food for infants and toddlers once a month. Links to local organizations and health providers for baby items and health issues.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Literacy Library",
          description: "A program designed at Debra Dynes. Families are allowed to borrow preschool books in English and second languages such as Farsi, Arabic or Somali to promote lifelong literacy.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        },
        {
          title: "Baby Bundles",
          description: "New baby and safety items to support families with their newborn children. All donations are gladly accepted.",
          image: "https://www.woolwich.ca/en/township-services/resources/team-386673.jpg"
        }
      ]}
    />
  </React.Fragment>
);

export default Programs;