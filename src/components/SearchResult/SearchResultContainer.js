import {connect} from 'react-redux';
import SearchResult from './SearchResults';
import { createAction_changeSearchString } from '../../redux/searchStringRedux.js';
import {getCardsFiltered /* createActionAddCard */} from '../../redux/cardRedux';

/*const mapStateToProps = (state, props) => ({
  cards: getCardsFiltered(state, props.id),
});*/

const mapStateToProps = (state, props) => ({
  cards: getCardsFiltered(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) =>
    dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
