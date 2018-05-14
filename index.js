import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppView from './src/modules/AppView';

import React, {Component} from 'react';
import {AppRegistry, YellowBox} from 'react-native';

class HotelDemoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}

//Ignore warning message isMounted(...) is deprecated to React native 0.55 afected React Navigation
// Issue ref: https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('HotelDemoApp', () => HotelDemoApp);
