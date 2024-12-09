import React from 'react';
import { Text } from 'react-native';
import { RNTextProps } from './RNText.interface';
import { styles } from './RNText.style';

const RNText: React.FC<RNTextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.default, style]} {...props}>
      {children}
    </Text>
  );
};

export default RNText;
