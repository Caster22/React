import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {info} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={info.title} image={info.image}/>
    <h2>Info</h2>
    <p>text={info.text}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string,
  text: PropTypes.string,
};
export default Info;