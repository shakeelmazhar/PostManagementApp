import { moderateScale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../utils/colors';
import createStyleSheet from '../../utils/scaledSheet';

export const styles = createStyleSheet({
  container: {
    flex: 1,
    
  },
  childContainer: {
    flex: 1,
    padding: moderateScale(16),
  },
  input: {
    maxHeight: verticalScale(38),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(12),
    borderWidth: moderateScale(0.7),
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    backgroundColor: colors.secondaryBackground,
  },
  messageText: {
    flex: 1,
    borderWidth: 0,
  },
  messageIcon: {
    width: moderateScale(14),
    height: moderateScale(14)
  },
  descriptionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: verticalScale(190),
    marginBottom: moderateScale(12),
    borderWidth: moderateScale(0.7),
    borderColor: colors.border,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    backgroundColor: colors.secondaryBackground,
  },
  descriptionText: {
    flex: 1,
    height: verticalScale(186),
    alignSelf: 'center',
    borderWidth: 0,
    textAlignVertical: 'top',
  },
  listIcon: {
    marginTop: moderateScale(14),
    width: moderateScale(14),
    height: moderateScale(14)
  }
});
