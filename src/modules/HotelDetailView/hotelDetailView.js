// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

// Components
import HotelDetailContent from '../../components/HotelDetailContent';

// Relative path only
import styles from './styles';

class HotelDetailView extends Component {
  static displayName = 'HotelDetailView';

  static propTypes = {
    loading: PropTypes.bool,
    hotel: PropTypes.object,
    response: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    actions: PropTypes.shape({
      getHotelDetail: PropTypes.func
    }).isRequired
  };

  componentDidMount() {
    const {navigation} = this.props;
    const id = navigation.getParam('id');

    if (id) {
      this.props.actions.getHotelDetail(id);
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <HotelDetailContent
          hotel={this.props.hotel}
          response={this.props.response}
          loading={this.props.loading}
        />
      </View>
    );
  }
}

export default HotelDetailView;
