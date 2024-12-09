import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface RNButtonProps {
  text: string;
  leftIcon?: string | number;
  backgroundColor?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean
}