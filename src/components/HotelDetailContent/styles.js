// Dependencies
import {StyleSheet} from 'react-native';

// Utils
import {getDimensions} from '../../utils/helpers';

// Themes
import {color3} from '../../themes/colors';

const widthImages = getDimensions().width / 3;
const widthAmenities = getDimensions().width / 6;

export default StyleSheet.create({
  section: {
    width: ' 100%',
    backgroundColor: color3,
    padding: 10,
    marginTop: 15
  },
  centered: {
    alignSelf: 'center'
  },
  images: {
    width: (widthImages - 15),
    height: (widthImages - 15)
  },
  amenities: {
    width: (widthAmenities - 30),
    height: (widthAmenities - 30)
  }
});
