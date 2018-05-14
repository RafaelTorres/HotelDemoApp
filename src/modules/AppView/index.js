// Dependencies
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// View
import App from './appView';

// Redux Actions
import * as ActionCreators from './actions';

/**
* Map state to props
*/
const mapStateToProps = state => ({
  isReady: state.getIn(['app', 'isReady'])
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
)(App);
