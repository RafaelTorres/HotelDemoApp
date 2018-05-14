// Dependencies
import {createStackNavigator} from 'react-navigation';

// Modules
import HomeView from '../HomeView';
import HotelDetail from '../HotelDetailView';

// Themes
import {
  color1,
  color3
} from '../../themes/colors';

const commonsProps = {
  headerTintColor: color1,
  headerTitleStyle: {
    color: color1
  },
  headerStyle: {
    backgroundColor: color3
  }
};

const homeNavigator = {
  screen: HomeView,
  navigationOptions: {
    title: 'Almundo - HotelDemoApp',
    ...commonsProps
  }
};

const hotelDetailNavigator = {
  screen: HotelDetail,
  navigationOptions: {
    title: 'Detalle del Hotel',
    ...commonsProps
  }
};

// Root navigator is a StackNavigator
const AppNavigator = createStackNavigator({
  Home: homeNavigator,
  HotelDetail: hotelDetailNavigator
},{
  initialRouteName: 'Home'
});

export default AppNavigator;
