// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

// Themes
import {color1} from '../../themes/colors';

// Relative path only
import styles from './styles';

const defaultStarProps = {

  name: 'ios-star',
  size: 23,
  color: color1
  //halfStar: 'ios-star-half',
  //emptyStar: 'ios-star-outline',
};

function StarRating(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.stars}>{props.stars}</Text>
      <Icon {...defaultStarProps}/>
    </View>
  );
}

StarRating.propTypes = {
  stars: PropTypes.string.isRequired
};

StarRating.defaultProps = {
  stars: '0.0'
};

export default StarRating;
