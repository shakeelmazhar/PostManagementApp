import React, { useEffect, useState } from "react";
import RNView from "../../components/atoms/RNView/RNView.component";
import { Alert } from "react-native";
import { addPost, editPost } from "../../services/postService";
import { styles } from "./AddPostScreen.style";
import { RNImage, RNTextInput } from "../../components/atoms";
import { RNButton, RNHeader } from "../../components/molecules";
import icons from "../../assets";
import { RNSafeAreaView } from "../../components/templates";
import { colors } from "../../utils/colors";

const AddPostScreen: React.FC = ({ navigation, route }) => {
  const { id, postTitle, postDescription, edit, onGoBack } = route.params;
  const [title, setTitle] = useState(postTitle || "");
  const [body, setBody] = useState(postDescription || "");

  const handleAddPost = () => {
    addPost(title, body)
      .then(() => {
        Alert.alert("Success", "Post added successfully!");
        setTitle("");
        setBody("");
        navigation.goBack();
      })
      .catch(() => Alert.alert("Error", "Failed to add post."));
  };

  const handleEditPost = () => {
    editPost(id, title, body)
      .then((resposne) => {
        console.debug("response: ", resposne);
        Alert.alert("Success", "Post edited successfully!");
        setTitle("");
        setBody("");
        if (onGoBack) {
          onGoBack();
        }
        navigation.goBack();
      })
      .catch((e) => Alert.alert("Error", "Failed to edit post." + e));
  };

  // useEffect(() => {
  //   // Add a listener for the back button
  //   const unsubscribe = navigation.addListener("beforeRemove", (e) => {
  //     // Prevent the default behavior
  //     e.preventDefault();

  //     // Trigger the callback
  //     onGoBack?.onGoBack();
  //     console.debug("useEffect:::::   ");
  //     // Manually go back
  //     navigation.dispatch(e.data.action);
  //   });

  //   return unsubscribe;
  // }, [navigation, onGoBack]);

  return (
    <RNSafeAreaView style={styles.container}>
      <RNHeader
        leftIcon={icons.back}
        headerText="Add New Post"
        rightIcon={icons.settings}
        onLeftPress={() => navigation.goBack()}
      />
      <RNView style={styles.childContainer}>
        <RNView style={styles.input}>
          <RNImage style={styles.messageIcon} image={icons.message} />
          <RNTextInput
            placeholder="Post Title"
            value={title}
            onChangeText={setTitle}
            style={styles.messageText}
          />
        </RNView>
        <RNView style={styles.descriptionView}>
          <RNImage style={styles.listIcon} image={icons.list} />
          <RNTextInput
            placeholder="Description"
            value={body}
            onChangeText={setBody}
            style={styles.descriptionText}
            multiline
          />
        </RNView>
        <RNButton
          text={edit ? "Edit" : "Post"}
          onPress={edit ? handleEditPost : handleAddPost}
          backgroundColor={
            !(title.length > 0 && body.length > 0)
              ? colors.borderColor
              : colors.btnColor
          }
          disabled={!(title.length > 0 && body.length > 0)}
        />
      </RNView>
    </RNSafeAreaView>
  );
};

export default AddPostScreen;
