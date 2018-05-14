// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

// Components
import HotelList from '../../components/HotelList';

// Relative path only
import styles from './styles';

class HomeView extends Component {
  static displayName = 'HomeView';

  static propTypes = {
    loading: PropTypes.bool,
    hotels: PropTypes.array,
    response: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    actions: PropTypes.shape({
      getHotels: PropTypes.func
    }).isRequired
  };

  componentDidMount() {
    this.props.actions.getHotels();
  }

  // Action that receive Dispatch when item is clicked
  handleHotelItem = (id) => {
    this.props.navigation.navigate('HotelDetail', {id});
  }

  render() {
    return (
      <View style={styles.container}>
        <HotelList
          loading={this.props.loading}
          hotels={this.props.hotels}
          response={this.props.response}
          onPress={this.handleHotelItem}
        />
      </View>
    );
  }
}

export default HomeView;
