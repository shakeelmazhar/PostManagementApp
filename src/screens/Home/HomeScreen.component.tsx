import React, { useState, useEffect } from "react";
import RNView from "../../components/atoms/RNView/RNView.component";
import RNFlatList from "../../components/atoms/RNFlatList/RNFlatList.component";
import { fetchPosts } from "../../services/postService";
import { styles } from "./HomeScreen.style";
import {
  RNButton,
  RNHeader,
  RNPostCard,
  RNSearchBar,
} from "../../components/molecules";
import { RNSafeAreaView } from "../../components/templates";
import icons from "../../assets";
import { ActivityIndicator, RefreshControl } from "react-native";
import { colors } from "../../utils/colors";

const HomeScreen: React.FC = ({ navigation }) => {
  const [posts, setPosts] = useState([]); // All posts loaded so far
  const [page, setPage] = useState(1); // Current page for pagination
  const [search, setSearch] = useState(""); // Search text
  const [loading, setLoading] = useState(false); // Loading indicator for data fetching
  const [refreshing, setRefreshing] = useState(false); // Refreshing indicator
  const [loadingMore, setLoadingMore] = useState(false); // Indicator for infinite scrolling
  // const navigation = useNavigation();

  // Fetch posts from the API
  const getPosts = async (isRefreshing = false, reset?: boolean) => {
    console.debug("reset: ", reset);
    if (loading || loadingMore) return;

    try {
      if (isRefreshing) {
        setRefreshing(true); // Show pull-to-refresh loader
      } else if (reset || page === 1) {
        setLoading(true); // Show initial loading spinner
      } else {
        setLoadingMore(true); // Show footer loading spinner
      }

      const data = await fetchPosts();

      if (isRefreshing) {
        setPosts(data.slice(0, 10)); // Refresh to first 10 posts
        setPage(2); // Reset pagination
      } else {
        setPosts((prevPosts) =>
          reset || page === 1
            ? data.slice(0, 10)
            : [...prevPosts, ...data.slice((page - 1) * 10, page * 10)]
        ); // Append new posts
        setPage((prevPage) => (reset ? 1 : prevPage + 1));
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
      setLoadingMore(false);
    }
  };

  // Fetch initial posts on mount
  useEffect(() => {
    getPosts();
  }, []);

  // Filter posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle pull-to-refresh
  const handleRefresh = () => {
    getPosts(true); // Pass `true` to indicate refreshing
  };

  // Handle loading more items when the end of the list is reached
  const handleLoadMore = () => {
    getPosts(); // Fetch the next page of posts
  };

  const onPressAddPosts = () => {
    navigation.navigate("AddPost");
  };

  const onPressEdiPost = ({
    id,
    title,
    body,
  }: {
    id: string;
    title: string;
    body: string;
  }) => {
    navigation.navigate("AddPost", {
      id,
      postTitle: title,
      postDescription: body,
      edit: true,
      onGoBack: () => getPosts(false, true),
    });
  };

  return (
    <RNSafeAreaView style={styles.container}>
      <RNHeader
        leftIcon={icons.burger}
        rightIcon={icons.settings}
        headerText="Feed"
        onLeftPress={() => console.log("Menu pressed")}
        onRightPress={() => console.log("Settings pressed")}
      />
      <RNView style={styles.childContainer}>
        {loading && page === 1 && <ActivityIndicator color={colors.btnColor} />}
        <RNSearchBar value={search} onChange={setSearch} />
        <RNView style={styles.listView}>
          <RNFlatList
            data={filteredPosts}
            keyExtractor={(item: { id: { toString: () => string } }) =>
              item.id.toString()
            }
            renderItem={({ item }) => (
              <RNPostCard {...item} onPressEdit={() => onPressEdiPost(item)} />
            )}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            onEndReached={handleLoadMore} // Trigger when the end of the list is reached
            onEndReachedThreshold={0.5} // Trigger loading more when 50% from the bottom
            ListFooterComponent={
              loadingMore && <ActivityIndicator color={colors.btnColor} />
            }
          />
        </RNView>
        <RNButton
          text="Add Post"
          leftIcon={icons.add}
          onPress={onPressAddPosts}
        />
      </RNView>
    </RNSafeAreaView>
  );
};

export default HomeScreen;
