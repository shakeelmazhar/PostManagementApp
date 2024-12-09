import React from "react";
import { FlatList } from "react-native";
import { RNFlatListProps } from "./RNFlatList.interface";
import { styles } from "./RNFlatList.style";

const RNFlatList = <T,>(props: RNFlatListProps<T>) => {
  return <FlatList {...props} style={[styles.default, props.style]} />;
};

export default RNFlatList;
