import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {title, icon, cards /* addCard */} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>
          <div>
            {/* eslint-disable-next-line react/prop-types */}
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          {/*<div>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div>*/}
        </section>
      </Container>
    );
  }
}

export default SearchResults;