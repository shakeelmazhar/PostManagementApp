import { colors } from '../../../utils/colors';
import { moderateScale, scale } from 'react-native-size-matters';
import createStyleSheet from '../../../utils/scaledSheet';

export const styles = createStyleSheet({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contentContainer: {
    paddingVertical: scale(13),
    borderBottomWidth: moderateScale(0.5),
    borderBottomColor: colors.borderColor,
    flex: 0.9
  },
  title: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: scale(4),
  },
  body: {
    fontSize: scale(14),
    color: colors.secondaryText,
  },
  editIcon: {
    width: moderateScale(16),
    height: moderateScale(16)
  }
});
