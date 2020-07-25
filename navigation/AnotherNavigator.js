import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import AnotherScreen from "../screens/AnotherScreen";
import GroupsScreen from "../screens/GroupsScreen";
import AudiosScreen from "../screens/AudiosScreen";
import FriendsNavigator from "./FriendsNavigator";

const _AnotherNavigator = createStackNavigator({
  Another: {
    screen: AnotherScreen,
    navigationOptions: {
      title: "More",
    },
  },
});

const _GroupsNavigator = createStackNavigator({
  Groups: {
    screen: GroupsScreen,
    navigationOptions: {
      title: "Message",
    },
  },
});

const _AudiosNavigator = createStackNavigator({
  Audios: {
    screen: AudiosScreen,
    navigationOptions: {
      title: "Music",
    },
  },
});

const AnotherNavigator = createDrawerNavigator({
  Another: {
    screen: _AnotherNavigator,
    navigationOptions: {
      title: "More",
    },
  },
  Friends: {
    screen: FriendsNavigator,
    navigationOptions: {
      title: "Friends",
    },
  },
  Groups: {
    screen: _GroupsNavigator,
    navigationOptions: {
      title: "Message",
    },
  },
  Audios: {
    screen: _AudiosNavigator,
    navigationOptions: {
      title: "Music",
    },
  },
});

export default AnotherNavigator;
