import React from "react";
import RNView from "../../atoms/RNView/RNView.component";
import RNText from "../../atoms/RNText/RNText.component";
import { PostCardProps } from "./RNPostCard.interface";
import { styles } from "./RNPostCard.style";
import { RNImage } from "../../atoms";
import icons from "../../../assets";
import { TouchableOpacity } from "react-native";

const RNPostCard: React.FC<PostCardProps> = ({ title, body, onPressEdit }) => {
  return (
    <RNView style={styles.container}>
      <RNView style={styles.contentContainer}>
        <RNText style={styles.title} numberOfLines={1}>
          {title}
        </RNText>
        <RNText style={styles.body} numberOfLines={1}>
          {body}
        </RNText>
      </RNView>
      <TouchableOpacity onPress={onPressEdit}>
        <RNImage style={styles.editIcon} image={icons.edit} />
      </TouchableOpacity>
    </RNView>
  );
};

export default RNPostCard;
