// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

// Components
import HotelInfo from '../HotelInfo';
import Image from '../ImageWithLoading';
import TouchableDebounce from '../TouchableDebounce';

// Relative Path OnLy
import styles from './styles';

class HotelCard extends Component {

  static propTypes = {
    hotel: PropTypes.object.isRequired,
    onPress: PropTypes.func
  };

  render() {

    const {
      _id,
      images
    } = this.props.hotel;

    const source = (Array.isArray(images) && images.length > 0)
    ? images[0]
    : null;

    return (
      <TouchableDebounce
        onPress={() => this.props.onPress ? this.props.onPress(_id) : null}
      >
        <View style={styles.container}>
          <Image source={source} style={styles.image}/>
          <View style={styles.info}>
              <HotelInfo hotel={this.props.hotel}/>
          </View>
        </View>
      </TouchableDebounce>
    );
  }
}

export default HotelCard;
