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
const maxWidth = "450px";

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

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-right: 16px;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;

const TextWrapper = styled.div`
  flex: 1;
  margin-left: 16px;
`;

const Program = ({
  title,
  description,
  image
}) => (
  <ProgramContainer>
    <ImageWrapper>
      <Image src={image} />
    </ImageWrapper>
    <TextWrapper>
      <Typography.H5>{title}</Typography.H5>
      <Typography.Body1>{description}</Typography.Body1>
    </TextWrapper>
  </ProgramContainer>
);

Program.propTypes = propTypes;
Program.SHAPE = propTypes;

export default Program;