import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Typography, MaterialVariants } from '@jksaunders/bonfire';
import * as Spacing from '@design/Spacing';
import Program from './Program';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  programs: PropTypes.arrayOf(PropTypes.shape(Program.SHAPE)).isRequired,
};

const ProgramSection = ({ title, description, programs }) => (
  <Layout background="white" centered column gap={Spacing.largePx}>
    <Typography variant={MaterialVariants.H2}>{title}</Typography>
    <Typography variant={MaterialVariants.H5}>{description}</Typography>
    <Layout
      align="content-center"
      columns="repeat(auto-fit, 450px)"
      full
      gap={Spacing.mediumLargePx}
    >
      {programs.map(p => (
        <Program key={p.title} {...p} />
      ))}
    </Layout>
  </Layout>
);

ProgramSection.propTypes = propTypes;

export default ProgramSection;
