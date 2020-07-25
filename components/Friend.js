import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Friend = ({ name, goToFriend }) => (
  <TouchableOpacity
    style={StyleSheet.container}
    onPress={() => goToFriend(name)}
  >
    <Text>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Friend;
