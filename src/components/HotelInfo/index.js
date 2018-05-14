// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

// Components
import StartRating from '../StarRating';
import HotelLocation from '../HotelLocation';

// Relative Path OnLy
import styles from './styles';

class HotelInfo extends Component {

  static propTypes = {
    hotel: PropTypes.object.isRequired,
    showLocation: PropTypes.bool
  };

  static defaultProps = {
    showLocation: false
  }

  getLocationComponent = () => {

    if (this.props.showLocation) {
      return (
        <HotelLocation hotel={this.props.hotel}/>
      );
    }

    return null;
  }

  render() {

    const {
      name,
      price,
      stars
    } = this.props.hotel;

    const star_text = stars.$numberDecimal || '0.0';
    const price_text = price.$numberDecimal || '0.0';

    return (
      <View>
        <Text style={styles.name}>{name}</Text>
          <View style={styles.column}>
            <StartRating stars={star_text}/>
            <Text style={styles.price}>COP {price_text}</Text>
          </View>
          {this.getLocationComponent()}
        </View>
    );
  }
}

export default HotelInfo;
