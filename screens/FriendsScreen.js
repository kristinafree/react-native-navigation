import React, { useState } from "react";
import FriendList from "../components/FriendList";
import Button from "../components/Button";
import { View } from "react-native";

const FriendsScreen = ({ navigation }) => {
  const [friends, setFriends] = useState([
    { id: "1", name: "Kris" },
    { id: "2", name: "Taras" },
    { id: "3", name: "Gracy" },
    { id: "4", name: "Monika" },
  ]);

  const goToFriend = (name) => {
    navigation.navigate("Friend", { name });
  };

  const toggleMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={{backgroundColor: "#86b58e"}}>
      <FriendList friends={friends} goToFriend={goToFriend} />
      <Button name="Sidebar" onPress={toggleMenu} />
    </View>
  );
};

export default FriendsScreen;
