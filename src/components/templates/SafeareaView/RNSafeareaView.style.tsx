import { colors } from "../../../utils/colors";
import createStyleSheet from "../../../utils/scaledSheet";


export const safeAreaViewStyles = () =>
  createStyleSheet({
    container: {
      flex: 1,
      backgroundColor: colors.white
    },
  });
