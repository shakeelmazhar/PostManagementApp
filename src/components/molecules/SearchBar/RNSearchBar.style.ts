import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../../utils/colors';
import createStyleSheet from '../../../utils/scaledSheet';

export const styles = createStyleSheet({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(20),
    backgroundColor: colors.secondaryBackground,
    maxHeight: verticalScale(34),
    paddingHorizontal: moderateScale(12),

  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: scale(14)
  },
  search: {
    marginRight: moderateScale(8),
    width: moderateScale(16),
    height: moderateScale(16)
  },
  clearTextIcon: {
    width: moderateScale(16),
    height: moderateScale(16)
  },
});
