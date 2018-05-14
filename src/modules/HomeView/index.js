// Dependencies
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// View
import Home from './homeView';

// Redux Actions
import * as ActionCreators from './actions';

/**
* Map state to props
*/
const mapStateToProps = state => ({
  hotels: state.getIn(['home', 'hotels']).toArray(),
  loading: state.getIn(['home', 'loading']),
  response: state.getIn(['home', 'response']).toJS()
});

/**
* Map dispatch to props
* @param dispatch
* @returns {object}
*/
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
