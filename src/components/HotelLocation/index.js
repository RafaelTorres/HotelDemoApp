// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import openMap from 'react-native-open-maps';
import {
  View,
  Text,
  Button
} from 'react-native';

// Themes
import {color2, color7} from '../../themes/colors';

// Relative path only
import styles from './styles';

const defaultStarProps = {
  name: 'ios-pin',
  size: 20,
  color: color2
};

function HotelLocation(props) {

  const {
    address,
    city,
    // state
    country,
    latitude,
    longitude
  } = props.hotel;

  const locationText = `${address ? `${address}, ` : ''}${city ? `${city}, ` : ''}${country ? `${country}` : ''}`;
  const latitudeText = latitude.$numberDecimal;
  const longitudeText = longitude.$numberDecimal;

  return (
    <View>
      <View style={styles.container}>
        <Icon {...defaultStarProps}/>
        <Text style={styles.address}>{locationText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress= {() => {
            if (latitudeText && longitudeText) {
              openMap(
                {
                  latitude: latitudeText,
                  longitude: longitudeText
                }
              );
            }
          }}
          color={color7}
          title={'Ir al Lugar'} />
    </View>
    </View>
  );
}

HotelLocation.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default HotelLocation;
