import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RNButtonProps } from "./RNButton.interface";
import { styles } from "./RNButton.style";
import { RNImage, RNText, RNView } from "../../atoms";

const RNButton: React.FC<RNButtonProps> = ({
  text,
  leftIcon,
  backgroundColor,
  onPress,
  style,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, backgroundColor && { backgroundColor }, style]}
      disabled={disabled}
    >
      {leftIcon && <RNImage style={styles.icon} image={leftIcon} />}
      <RNText style={[styles.text, textStyle]}>{text}</RNText>
    </TouchableOpacity>
  );
};

export default RNButton;
