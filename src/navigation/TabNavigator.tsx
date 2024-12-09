import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import RNView from "../components/atoms/RNView/RNView.component";
import RNText from "../components/atoms/RNText/RNText.component";
import icons from "../assets";
import { RNImage } from "../components/atoms";
import { styles } from "./TabNavigator.styles";
import { colors } from "../utils/colors";

const Tab = createBottomTabNavigator();

const DummyScreen = () => (
  <RNView>
    <RNText>Dummy Screen</RNText>
  </RNView>
);

const renderTabIcon = (
  route: any,
  focused: boolean,
  color: string,
  size: number
) => {
  console.debug("size: ", size, color);
  let iconName = icons.home;
  switch (route.name) {
    case "Feed":
      iconName = icons.home;
      break;
    case "Posts":
      iconName = icons.posts;
      break;
    case "Calendar":
      iconName = icons.calendar;
      break;
    default:
      iconName = icons.settings;
      break;
  }
  return (
    <RNImage
      image={iconName}
      style={[
        styles.tabNavigationIcon,
        {
          tintColor: focused ? colors.btnColor : colors.iconDisabled,
        },
      ]}
    />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
        tabBarActiveTintColor: colors.btnColor,
        tabBarInactiveTintColor: colors.iconDisabled,
        tabBarLabelStyle: styles.tabBarText,
      })}
    >
      <Tab.Screen name="Feed" component={HomeStack} />
      <Tab.Screen name="Posts" component={DummyScreen} />
      <Tab.Screen name="Calendar" component={DummyScreen} />
      <Tab.Screen name="Settings" component={DummyScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
