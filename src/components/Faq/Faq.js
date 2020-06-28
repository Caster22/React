import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {faq} from '../../data/dataStore';
import Info from '../Icon/Info';

const Faq = () => (
  <Container>
    <Hero titleText={faq.title} image={faq.image}/>
    <h2>FAQ</h2>
    <p>text={faq.text}</p>
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Faq;