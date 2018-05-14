// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View
} from 'react-native';

// Components
import Image from '../ImageWithLoading';
import TouchableDebounce from '../TouchableDebounce';

// Relative Path OnLy
import styles from './styles';

class ImageList extends Component {

  static propTypes = {
    images: PropTypes.array,
    isAssets: PropTypes.bool,
    onPress: PropTypes.func,
    numColumns: PropTypes.number,
    imageStyle: PropTypes.number
  };

  static defaultProps = {
    images: [],
    isAssets: false,
    numColumns: 1,
    onPress: null
  }

  /**
  * Component to render in list
  * @param  {Object} item object to information to render in list
  * @return {Component}    Row to render in list
  */

  getRenderItem = ({item}) => {

    const imageComp = (
      <View style={styles.container}>
        <Image
          source ={item}
          style={this.props.imageStyle}
          isAssets={this.props.isAssets}
        />
      </View>
    );

    if (this.props.onPress) {
      return (
        <TouchableDebounce onPress={() => this.props.onPress}>
          {imageComp}
        </TouchableDebounce>
      );
    }

    return imageComp;
  }

  /**
   *  Key asign to component render in list
   * @param  {Object} item data
   * @return  {String} key name to component
   */
  _keyExtractor = (item) => item;

  render() {

    return (
      <FlatList
        data={this.props.images}
        renderItem={this.getRenderItem}
        keyExtractor={this._keyExtractor}
        numColumns={this.props.numColumns}
      />
    );
  }
}

export default ImageList;
