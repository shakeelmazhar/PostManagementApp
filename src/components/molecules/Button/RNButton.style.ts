import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../../utils/colors';
import createStyleSheet from '../../../utils/scaledSheet';

export const styles = createStyleSheet({
  button: {
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.btnColor,
    height: verticalScale(36),
  },
  icon: {
    marginRight: moderateScale(8),
    width: moderateScale(16),
    height: moderateScale(16)
  },
  text: {
    fontSize: scale(14),
    color: colors.white,
  },
});
