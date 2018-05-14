// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Communications from 'react-native-communications';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

// Themes
import {color7} from '../../themes/colors';

// Components
import HotelInfo from '../HotelInfo';
import ImageList from '../ImageList';
import LoadingIndicator from '../LoadingIndicator';

// Utils
import {openURLInBrowser} from '../../utils/helpers';

// Relative Path OnLy
import styles from './styles';

class HotelDetailContent extends Component {

  static propTypes = {
    hotel: PropTypes.object,
    loading: PropTypes.bool,
    response: PropTypes.object
  };

  static defaultProps = {
    hotels: [],
    loading: false,
    response: {type: false}
  }

  getButtonsActions(value, label, callback) {

    if (value) {
      return (
        <View style={[styles.section, styles.centered]}>
          <Button
            onPress={() => callback ? callback(value) : null}
            title={label}
            color={color7}/>
        </View>
      );
    }

    return null;
  }

  getImagesLists(values, numColumns, isAssets, imageStyle) {

    if (values && values.length > 0) {
      return (
        <View style={styles.section}>
          <ImageList
            images={values}
            numColumns={numColumns}
            isAssets={isAssets}
            imageStyle={imageStyle}
          />
        </View>
      );
    }

    return null;
  }

  handleHotelPhone = (phone) => {
    Communications.phonecall(phone, true);
  }

  handleHotelWebsite = (website) => {
    openURLInBrowser(website);
  }

  render() {

    if (this.props.loading) {
      return (<LoadingIndicator />);
    }

    if ((!this.props.hotel || Object.keys(this.props.hotel).length === 0) || this.props.response.type === 'error') {
      return (
        <Text style={styles.message}>
          {this.props.response.message || 'No se encontro detalle del hotel'}
        </Text>
      );
    }

    const {
      images,
      amenities,
      phone,
      website
    } = this.props.hotel;

    return (
      <ScrollView>
        <View style={styles.section}>
          <HotelInfo hotel={this.props.hotel} showLocation={true}/>
        </View>
        {this.getImagesLists(amenities, 8, true, styles.amenities)}
        {this.getImagesLists(images, 3, false, styles.images)}
        {this.getButtonsActions(phone, `Marcar a (${phone})`, this.handleHotelPhone)}
        {this.getButtonsActions(website, 'Ver sitio web', this.handleHotelWebsite)}
      </ScrollView>
    );
  }

}

export default HotelDetailContent;
