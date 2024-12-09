import { scale } from 'react-native-size-matters';
import { colors } from '../../../utils/colors';
import createStyleSheet from '../../../utils/scaledSheet';

export const styles = createStyleSheet({
  default: {
    height: scale(40),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: scale(8),
    paddingHorizontal: scale(10),
    backgroundColor: colors.secondaryBackground,
    color: colors.text,
  },
});
