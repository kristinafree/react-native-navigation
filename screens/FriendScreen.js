import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FriendScreen = ({ navigation }) => {
  <View style={styles.container}>
    <Text>Friend {navigation.getParam("name")}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c47697"
  },
});

export default FriendScreen;
