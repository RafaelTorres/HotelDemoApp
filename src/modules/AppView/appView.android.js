// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import {
  View,
  StatusBar,
  BackHandler
} from 'react-native';

// Redux
import store from '../../redux/store';

// Modules
import Navigation from '../Navigation';

// Components
import LoadingIndicator from '../../components/LoadingIndicator';
import DeveloperMenu from '../../components/DeveloperMenu/DeveloperMenu';

// Utils
import * as snapshotUtil from '../../utils/snapshot';
import {color5} from '../../themes/colors';

// Relative Path Only
import styles from './styles';

// Default Props
const statusBarProps = {
  backgroundColor: color5,
  barStyle: 'default'
};

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      resetSessionStateFromSnapshot: PropTypes.func,
      initializeSessionState: PropTypes.func
    }).isRequired
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.navigateBack);
  }

  componentDidMount() {

    // Hidde Splash screen
    SplashScreen.hide();

    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {actions} = this.props;

        if (snapshot) {
          actions.resetSessionStateFromSnapshot(snapshot);
        } else {
          actions.initializeSessionState();
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  navigateBack() {
    const navigatorState = store.getState().get('navigatorState');

    const currentStackScreen = navigatorState.get('index');
    const currentTab = navigatorState.getIn(['routes', 0, 'index']);

    if (currentTab !== 0 || currentStackScreen !== 0) {
      store.dispatch(NavigationActions.back());
      return true;
    }

    // otherwise let OS handle the back button action
    return false;
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={styles.container}>
          <LoadingIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar {...statusBarProps}/>
        <Navigation />
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }
}

export default AppView;
