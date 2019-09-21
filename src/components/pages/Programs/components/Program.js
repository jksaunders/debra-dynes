import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, colors } from "@jksaunders/bonfire";

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const maxHeight = "250px";
const maxWidth = "350px";

const ProgramContainer = styled.div`
  background-color: white;
  border-color: ${colors.cotton};
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: row;
  margin: 15px 0px;
  max-height: ${maxHeight};
  max-width: ${maxWidth};
  padding: 32px;
`;

const Flex = styled.div`
  flex: ${props => props.flex};
`;

// const Image = styled.img`
//   flex: 1;
//   max-height: ${maxHeight}
//   max-width: ${maxWidth}
//   object-fit: cover;
// `;

const Image = styled.img`
  flex: 1;
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;

const Program = ({
  title,
  description,
  image
}) => (
  <ProgramContainer>
    <Flex flex={2}>
      <Typography.H5>{title}</Typography.H5>
      <Typography.Body1>{description}</Typography.Body1>
    </Flex>
    <Flex flex={1}>
      <Image src={image} />
    </Flex>
  </ProgramContainer>
);

Program.propTypes = propTypes;
Program.SHAPE = propTypes;

export default Program;