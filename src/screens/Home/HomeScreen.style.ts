import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  childContainer: {
    flex: 1,
    padding: moderateScale(16),
  },
  listView: {
    flex: 1, 
    marginVertical: verticalScale(8)
  }
});
