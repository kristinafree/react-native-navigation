import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FeedScreen from "../screens/FeedScreen";
import SearchScreen from "../screens/SearchScreen";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationNavigator from "./NotificationNavigator";
import AnotherNavigator from "./AnotherNavigator";

const _FeedNavigator = createStackNavigator({
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      title: "News",
    },
  },
});

const _SearchNavigator = createStackNavigator({
  Feed: {
    screen: SearchScreen,
    navigationOptions: {
      title: "Search",
    },
  },
});

const _MessagesNavigator = createStackNavigator({
  Feed: {
    screen: MessagesScreen,
    navigationOptions: {
      title: "Messages",
    },
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: _FeedNavigator,
      navigationOptions: {
        title: "News",
      },
    },
    Search: {
      screen: _SearchNavigator,
      navigationOptions: {
        title: "Search",
      },
    },
    Messages: {
      screen: _MessagesNavigator,
      navigationOptions: {
        title: "Messages",
      },
    },
    Notification: {
      screen: NotificationNavigator,
      navigationOptions: {
        title: "Notifications",
      },
    },
    Another: {
      screen: AnotherNavigator,
      navigationOptions: {
        title: "More",
      },
    },
  },
  {
    initialRouteName: "Messages",
  }
);

export default createAppContainer(AppNavigator);
