// Dependencies
import {connect} from 'react-redux';

// View
import Navigation from './navigationView';

/**
* Map state to props
*/
const mapStateToProps = state => ({
  nav: state.get('nav').toJS()
});

export default connect(
  mapStateToProps
)(Navigation);
