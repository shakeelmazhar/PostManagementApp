import React from 'react';
import { TextInput } from 'react-native';
import { RNTextInputProps } from './RNTextInput.interface';
import { styles } from './RNTextInput.style';

const RNTextInput: React.FC<RNTextInputProps> = ({ style, ...props }) => {
  return <TextInput style={[styles.default, style]} {...props} />;
};

export default RNTextInput;
