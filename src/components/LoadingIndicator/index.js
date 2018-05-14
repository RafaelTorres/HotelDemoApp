// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

// Themes
import {color1} from '../../themes/colors';

// Relative Path OnLy
import styles from './styles';

function LoadingIndicator(props) {
  return (
    <ActivityIndicator
      style={[styles.centered, props.style]}
      color={color1}
      size={props.size}
     />
  );
}

LoadingIndicator.propTypes = {
  style: PropTypes.number,
  size: PropTypes.string
};

LoadingIndicator.defaultProps = {
  size: 'small'
};

export default LoadingIndicator;
