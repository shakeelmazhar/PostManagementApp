import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import createStyleSheet from '../../../utils/scaledSheet';

export const styles = createStyleSheet({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: verticalScale(35),
    width: '100%',
    paddingHorizontal: moderateScale(6),
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  headerIcon: {
    width: moderateScale(16),
    height: moderateScale(16)
  },
  icon: {
    width: scale(40),
    alignItems: 'center',
  },
});
