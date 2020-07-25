import { createStackNavigator } from "react-navigation-stack";

import NotificationScreen from "../screens/NotificationScreen.js";

import FriendScreen from "../screens/FriendScreen.js";
import FriendsScreen from "../screens/FriendsScreen.js";

const FriendsNavigator = createStackNavigator({
  Friends: {
    screen: FriendsScreen,
    navigationOptions: {
      title: "Friends",
    },
  },
  Friend: {
    screen: FriendScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam("name"),
    }),
  },
});

export default FriendsNavigator;
