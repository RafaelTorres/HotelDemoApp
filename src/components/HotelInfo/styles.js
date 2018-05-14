// Dependencies
import {StyleSheet} from 'react-native';

// Themes
import {
  color5,
  color6
} from '../../themes/colors';

export default StyleSheet.create({
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  name: {
    fontSize: 22,
    color: color5
  },
  price: {
    fontSize: 18,
    color: color6
  }
});
