import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { SearchBarProps } from './RNSearchBar.interface';
import { styles } from './RNSearchBar.style';
import { RNImage, RNText, RNView } from '../../atoms';
import icons from '../../../assets';

const RNSearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(inputValue);
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue]);

  return (
    <RNView style={styles.container}>
      <RNImage style={styles.search} image={icons.search} />
      <TextInput
        style={styles.input}
        placeholder="Search Posts"
        value={inputValue}
        onChangeText={setInputValue}
      />
      {inputValue && (
        <TouchableOpacity onPress={() => setInputValue('')}>
          <RNImage style={styles.clearTextIcon} image={icons.close} />
        </TouchableOpacity>
      )}
    </RNView>
  );
};

export default RNSearchBar;
