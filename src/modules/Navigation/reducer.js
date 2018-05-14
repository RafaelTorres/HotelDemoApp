// Dependencies
import {fromJS} from 'immutable';
import {NavigationActions} from 'react-navigation';
import includes from 'lodash/includes';

// Utils
import {getCurrentRouteName} from '../../utils/navigation';

// Constants
import {RESET_STATE} from '../AppView/constants';

// Navigation config
import AppNavigator from './navigator';

const initialState = fromJS(AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home'),
));

export default function NavigationReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state.toJS()) || state;

  if (action.type === RESET_STATE) {
    return initialState;
  }

  // Is this a navigation action that we should act upon?
  if (includes(NavigationActions, action.type)) {
    // lets find currentScreen before this action based on state
    const currentScreen = getCurrentRouteName(state);
    // determine what the new screen will be after this action was performed
    const nextScreen = getCurrentRouteName(nextState);

    if (nextScreen !== currentScreen) {
      nextState.currentRoute = nextScreen;
      // console.log(`screen changed, punk: ${currentScreen} -> ${nextScreen}`);
    }

    return fromJS(nextState);
  }

  return state;
}
