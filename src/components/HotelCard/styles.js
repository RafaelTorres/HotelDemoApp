// Dependencies
import {StyleSheet} from 'react-native';

// Utils
import {getDimensions} from '../../utils/helpers';

// Themes
import {
  color4,
  color5
} from '../../themes/colors';

const width = getDimensions().width;

export default StyleSheet.create({
  container: {
    backgroundColor: color4,
    flexDirection: 'column',
    shadowColor: color5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowRadius: 1,
    shadowOpacity: .5,
    elevation: 2,
    marginHorizontal: 8,
    marginBottom: 8,
    marginTop: 8
  },
  image: {
    width: (width - 16),
    height: 150
  },
  info: {
    padding: 10
  }
});
