// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';

// Components
import LoadingIndicator from '../LoadingIndicator';

// Assets
import Images from '../../assets/images';

// Relative path only
import styles from './styles';

const defaultSource = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';
const loadingIndicatorDefaultProps = {
  style: styles.centered,
  size: 'large'
};

class ImageWithLoading extends Component {

  static propTypes = {
    source: PropTypes.string.isRequired,
    style: PropTypes.number,
    isAssets: PropTypes.bool
  };

  static defaultProps = {
    source: defaultSource,
    isAssets: false
  };

  state = {loading: false}

  /**
 *  manage state to loading image
 * @param  {bool} loading state to show or dimmis loading
 */
  setLoadImageState = (loading) => {
    this.setState({loading});
  }

  render() {

    const {source, isAssets} = this.props;

    const LoadingComponent = (this.state.loading)
    ? (<LoadingIndicator {...loadingIndicatorDefaultProps}/>)
    : null;

    const src = isAssets ? Images[source] : {uri: source};
    const sizeMode = isAssets ? 'contain' : 'cover';

    return (
      <View>
          <Image
            source={src}
            resizeMode={sizeMode}
            style={[styles.image, this.props.style]}
            onLoadStart={() => this.setLoadImageState(true)}
            onLoadEnd= {() => this.setLoadImageState(false)}
          />
          {LoadingComponent}
      </View>
    );
  }

}

export default ImageWithLoading;
