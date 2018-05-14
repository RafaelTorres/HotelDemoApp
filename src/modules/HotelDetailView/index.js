// Dependencies
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// View
import HotelDetail from './hotelDetailView';

// Redux Actions
import * as ActionCreators from './actions';

/**
* Map state to props
*/
const mapStateToProps = state => ({
  hotel: state.getIn(['hotelDetail', 'hotel']).toJS(),
  loading: state.getIn(['hotelDetail', 'loading']),
  response: state.getIn(['hotelDetail', 'response']).toJS()
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
)(HotelDetail);
