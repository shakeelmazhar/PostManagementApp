import React, { JSX, useMemo } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import { RNImageProps } from "./RNImage.interface";

const RNImage: React.FC<RNImageProps> = ({
  style,
  image,
  resizeMode,
}: RNImageProps): JSX.Element => {
  const getImageUri = useMemo(() => {
    const imageURI: string = image as string;
    return imageURI;
  }, [image]);
  // Determine the source of the image based on whether it is a local asset or a URL
  const isURL = useMemo(
    () =>
      typeof image === "string" &&
      (image.startsWith("http") || image.startsWith("https")),
    [image],
  );

  if (isURL) {
    return (
      <Image
        resizeMode={resizeMode}
        style={style as StyleProp<ImageStyle>}
        source={{ uri: getImageUri }}
      />
    );
  }

  return (
    <Image
      resizeMode={resizeMode}
      style={style as StyleProp<ImageStyle>}
      source={image as ImageSourcePropType}
    />
  );
};

export default RNImage;