import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Bar, Typography, MaterialVariants } from '@jksaunders/bonfire';
import * as Spacing from '@design/Spacing';
import Program from './Program';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  programs: PropTypes.arrayOf(PropTypes.shape(Program.SHAPE)).isRequired,
};

const StyledBar = styled(Bar)`
  align-items: center;
  display: flex;
  ${props => `flex-direction: ${props.direction || 'column'};`}
  justify-content: space-around;
  padding: 0px 8%;
`;

const ProgramsContainer = styled(Bar)`
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${Spacing.largePx};
`;

const ProgramSection = ({ title, description, programs }) => (
  <StyledBar backgroundColor="white">
    <Content>
      <Typography variant={MaterialVariants.H2}>{title}</Typography>
    </Content>
    <Content>
      <Typography variant={MaterialVariants.H5}>{description}</Typography>
    </Content>
    <ProgramsContainer>
      {programs.map(p => (
        <Program key={p.title} {...p} />
      ))}
    </ProgramsContainer>
  </StyledBar>
);

ProgramSection.propTypes = propTypes;

export default ProgramSection;
