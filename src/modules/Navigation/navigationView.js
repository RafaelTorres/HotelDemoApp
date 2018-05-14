// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';

// Navigation config
import AppNavigator from './navigator';

const addListener = createReduxBoundAddListener('root');

class NavigationView extends Component {
  static displayName = 'NavigationView';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.shape({
      index: PropTypes.number.isRequired,
      routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        routeName: PropTypes.string.isRequired
      }))
    }).isRequired
  };

  render() {
    return (
      <AppNavigator
        navigation= {{
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        }}
      />
    );
  }
}

export default NavigationView;
