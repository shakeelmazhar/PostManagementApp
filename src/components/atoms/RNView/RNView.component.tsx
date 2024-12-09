import React from 'react';
import { View } from 'react-native';
import { RNViewProps } from './RNView.interface';
import { styles } from './RNView.style';

const RNView: React.FC<RNViewProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.default, style]} {...props}>
      {children}
    </View>
  );
};

export default RNView;
