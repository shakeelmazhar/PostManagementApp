import React from 'react';
import { TouchableOpacity } from 'react-native';
import RNView from '../../atoms/RNView/RNView.component';
import RNText from '../../atoms/RNText/RNText.component';
import { HeaderProps } from './RNHeader.interface';
import { styles } from './RNHeader.style';
import { RNImage } from '../../atoms';

const RNHeader: React.FC<HeaderProps> = ({ leftIcon, rightIcon, headerText, onLeftPress, onRightPress }) => {
  return (
    <RNView style={styles.container}>
      <TouchableOpacity onPress={onLeftPress} style={styles.icon}>
        <RNImage style={styles.headerIcon} image={leftIcon} />
      </TouchableOpacity>
      <RNText style={styles.text}>{headerText}</RNText>
      <TouchableOpacity onPress={onRightPress} style={styles.icon}>
        <RNImage style={styles.headerIcon} image={rightIcon} />
      </TouchableOpacity>
    </RNView>
  );
};

export default RNHeader;
