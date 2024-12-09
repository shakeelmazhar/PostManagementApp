import { JSX } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface RNSafeAreaViewProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}
