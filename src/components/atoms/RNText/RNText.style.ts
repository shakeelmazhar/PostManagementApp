import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../../utils/colors';
import createStyleSheet from '../../../utils/scaledSheet';

export const styles = createStyleSheet({
  default: {
    fontSize: moderateScale(12),
    color: colors.text,
  },
});
