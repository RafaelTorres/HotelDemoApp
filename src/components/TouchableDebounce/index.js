// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

// Components

// Utils
import {
  getPlatform,
  debounce
} from '../../utils/helpers';

// Relative Path

const TouchComponent = (getPlatform() === 'ios')
  ? TouchableOpacity
  : TouchableNativeFeedback;

class TouchableDebounce extends React.PureComponent {

  render() {
    return (
      <TouchComponent
        {...this.props}
        onPress= {
          debounce(() => {
            this.props.onPress();
          })
        }
      >
        {this.props.children}
      </TouchComponent>
    );
  }
}

TouchableDebounce.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
};

export default TouchableDebounce;
