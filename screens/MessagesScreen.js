import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8FBC8F"
  },
});

export default MessagesScreen;
