import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, MaterialVariants, Layout } from '@jksaunders/bonfire';
import * as Colors from '@design/Colors';
import * as Spacing from '@design/Spacing';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const maxHeight = '250px';
const maxWidth = '450px';

// eslint-disable-next-line react/prop-types
const ProgramContainer = ({ children }) => (
  <Layout
    background="white"
    border={`1px solid ${Colors.lightGrey}`}
    gap={Spacing.largePx}
    maxHeight={maxHeight}
    maxWidth={maxWidth}
    overflowY="hidden"
    padding={Spacing.largePx}
    row
  >
    {children}
  </Layout>
);

const ImageWrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;

const Program = ({ title, description, image }) => (
  <ProgramContainer>
    <ImageWrapper>
      <Image src={image} />
    </ImageWrapper>
    <Layout column>
      <Typography variant={MaterialVariants.H5}>{title}</Typography>
      <Typography variant={MaterialVariants.Body1}>{description}</Typography>
    </Layout>
  </ProgramContainer>
);

Program.propTypes = propTypes;
Program.SHAPE = propTypes;

export default Program;
