import React, { JSX } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RNSafeAreaViewProps } from "./RNSafeareaView.interface";
import { safeAreaViewStyles } from "./RNSafeareaView.style";

const RNSafeAreaView: React.FC<RNSafeAreaViewProps> = ({
  children,
  style,
}: RNSafeAreaViewProps): JSX.Element => {
  const styles = safeAreaViewStyles();

  return (
    <SafeAreaView
      style={[styles.container, style]}
      edges={["top", "left", "right"]}
    >
      {children}
    </SafeAreaView>
  );
};

export default RNSafeAreaView;
