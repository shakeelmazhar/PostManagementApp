import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface RNImageProps {
  style?: StyleProp<ImageStyle | ViewStyle>;
  image?: ImageSourcePropType | string;
  assetImageURI?: string;
  resizeMode?: ImageResizeMode;
}
