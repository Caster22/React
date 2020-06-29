import {connect} from 'react-redux';
import SearchResult from './SearchResults';
import {getCardsFiltered /* createActionAddCard */} from '../../redux/cardRedux';

/*const mapStateToProps = (state, props) => ({
  cards: getCardsFiltered(state, props.id),
});*/

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  const filteredCards = state.cards.filter(card => card.title == searchString);
  const cardsParams = filteredCards[0] || {};

  return {
    ...cardsParams,
    cards: getCardsFiltered(state, props.searchString),
  };
};

/*const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});*/

export default connect(mapStateToProps /* mapDispatchToProps */)(SearchResult);
