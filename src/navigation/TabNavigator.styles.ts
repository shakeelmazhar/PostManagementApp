import { moderateScale, scale } from "react-native-size-matters";
import createStyleSheet from "../utils/scaledSheet";


export const styles = createStyleSheet({
    tabNavigationIcon: {
        width: moderateScale(20),
        height: moderateScale(20),
    },
    tabBarText: {
        textAlign: "center",
        fontSize: scale(10),
        fontWeight: "500",
      },
});
