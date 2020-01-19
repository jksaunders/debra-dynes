import React from "react";
import styled from "styled-components";
import { Bar, Typography, MaterialVariants } from "@jksaunders/bonfire";
import { ProgramSection } from "./components";

const StyledBar = styled(Bar)`
  align-items: center;
  display: flex;
  ${props => `flex-direction: ${props.direction || "column"};`}
  justify-content: center;
  padding: 0px 8%;
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 32px;
`;

const Programs = () => (
  <>
    <StyledBar
      backgroundColor="white"
    >
      <Content>
        <Typography variant={MaterialVariants.H2}>Programs</Typography>
      </Content>
      <Typography variant={MaterialVariants.H5}>
          We have a bunch of stellar programs that do a lot of good for a lot of people.
      </Typography>
    </StyledBar>
    <ProgramSection
      title="Adults"
      description="Programs for adults!"
      programs={[
        {
          title: "Emergency Food Bank",
          description: "Provides a 3-day supply of emergency food one time per month. Please contact the Family House for more information on our current catchment area and how we can help if you are working or in school.",
          image: "https://nourishpc.org/wp-content/uploads/2017/05/header-170414_foodbank_002.jpg"
        },
        {
          title: "Freebie Friday",
          description: "Collected from donations and clothing drives, families are able to receive high-quality and gently used free clothing and small household items.",
          image: "https://s23916.pcdn.co/wp-content/uploads/2019/05/warrens-greatest-garage-sale.jpg"
        },
        {
          title: "Starting Strong & Collective Kitchen",
          description: "This prenatal program works in partnership with Carlington Community Health Resources Center to support pregnant women and nursing mothers on a bi-monthly basis for health promotion and nutrition.",
          image: "https://s.hdnux.com/photos/01/04/65/05/18043217/3/920x920.jpg"
        },
        {
          title: "Community Computers",
          description: "Community access program that provides free computer and internet access, printing, scanning, faxing and photocopying.",
          image: "https://static.coindesk.com/wp-content/uploads/2013/11/computer-row-860x430.jpg"
        },
        {
          title: "Welcome Caregivers!",
          description: "A time to play, meet and support. The playroom is open for caregivers on a daily basis.",
          image: "https://static.onecms.io/wp-content/uploads/sites/38/2017/04/12233710/playroom_clutter2.jpg"
        },
        {
          title: "Sewing Program",
          description: "Run by community volunteers to provide participants with basic sewing skills, assisting in making and reparing clothes, and making household furnishing items.",
          image: "https://www.bhg.com.au/media/24027/sewing-machine.jpg"
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
          image: "https://static.coindesk.com/wp-content/uploads/2013/11/computer-row-860x430.jpg"
        },
        {
          title: "First Work Experience & Employment Training",
          description: "Partnering with several organizations to create skills training and employment experience for low income youth in the community in the summer vacation period. First Work Experience is a program designed by the Family House to assist Junior High youth who are too old for camp and too young for pre-employment training programs.",
          image: "http://www.communityskillscentre.com/wp-content/uploads/2018/07/youth-jobs-web.jpg"
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
          image: "https://images.theconversation.com/files/244585/original/file-20181108-74751-8yqzuk.jpg"
        },
        {
          title: "Emergency Lunch Program",
          description: "Nutritional lunches provided each school day for families in need/crisis.",
          image: "https://www.thegraciouspantry.com/wp-content/uploads/2018/08/clean-eating-lunch-box-burritos-v-1-.jpg"
        },
        {
          title: "Holiday Gift Sales",
          description: "Gift sales allow for children to purchase small gift items for their parents at significant times during the year such as Mother's Day, Father's Day and Christmas. All donations are gladly accepted.",
          image: "https://www.incimages.com/uploaded_files/image/970x450/getty_168325476_349217.jpg"
        },
        {
          title: "Ready For School",
          description: "Working with community partners, the Family House provides essential school supplies for children and youth at the beginning of the school year and in the New Year for semester students.",
          image: "https://www.plymouth.k12.ma.us/cms/lib/MA02202215/Centricity/ModuleInstance/34/large/firstday2.jpg"
        },
        {
          title: "Seasonal Programming",
          description: "Working with the City Of Ottawa to create opportunities such as I Love To Skate, Play Soccer and I Love To Dance.",
          image: "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Articles/Soccer+Tips/carousel.jpg"
        },
        {
          title: "Summer Breakfast & Lunch Program",
          description: "Providing nutritional support each and every day of camp activities.",
          image: "http://cdn.cnn.com/cnnnext/dam/assets/190515173104-03-breakfast-around-the-world-avacado-toast.jpg"
        },
        {
          title: "Summer Camps",
          description: "In partnership with Children's Village of Ottawa, children 5-7 and 8-12 years old attend a summer day camp for 2 week periods during July and August. \"Transitions\" is a unique approach to participating in camp. Children develop and plan their camp together. They learn skills, have fun, and develop self-confidence, independence and responsibility.",
          image: "https://images.theconversation.com/files/264402/original/file-20190318-28479-fxsh7e.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
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
          image: "https://img.honest.com/uploads/media/file/000/009/379/pQbbygrr.jpg"
        },
        {
          title: "Literacy Library",
          description: "A program designed at Debra Dynes. Families are allowed to borrow preschool books in English and second languages such as Farsi, Arabic or Somali to promote lifelong literacy.",
          image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg?w968h681"
        },
        {
          title: "Baby Bundles",
          description: "New baby and safety items to support families with their newborn children. All donations are gladly accepted.",
          image: "https://d10yvuj6ozpj34.cloudfront.net/media/catalog/product/cache/2/image/760x760/9df78eab33525d08d6e5fb8d27136e95/0/5/0514---aj-in-stroller---blue-ships-muslin-as-stroller-blanket_3_3_1_1_4_1_1.jpg"
        }
      ]}
    />
  </>
);

export default Programs;