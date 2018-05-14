// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  FlatList
} from 'react-native';

// Components
import HotelCard from '../HotelCard';
import LoadingIndicator from '../LoadingIndicator';

// Relative Path OnLy
import styles from './styles';

class HotelList extends Component {

  static propTypes = {
    hotels: PropTypes.array,
    loading: PropTypes.bool,
    response: PropTypes.object,
    onPress: PropTypes.func
  };

  static defaultProps = {
    hotels: [],
    loading: false,
    response: {type: false},
    onPress: null
  }

  /**
  * Component to render in list
  * @param  {Object} item object to information to render in list
  * @return {Component}    Row to render in list
  */
  getRenderItem= ({item}) => (
    <HotelCard
      hotel={item.toJS()}
      onPress={this.props.onPress}
    />
  )

  /**
   *  Key asign to component render in list
   * @param  {Object} item data
   * @return  {String} key name to component
   */
  _keyExtractor = (item) => item.toJS()._id;

  render() {

    if (this.props.loading) {
      return (<LoadingIndicator />);
    }

    if (!this.props.hotels || this.props.response.type === 'error') {
      return (
        <Text style={styles.message}>
          {this.props.response.message || 'No fueron encontados Hoteles'}
        </Text>
      );
    }

    return (
      <FlatList
        data={this.props.hotels}
        renderItem={this.getRenderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export default HotelList;
