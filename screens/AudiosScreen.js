import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const AudiosScreen = ({ navigation }) => {
  const toggleMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <Text>Audio</Text>
      <Button name="Sidebar" onPress={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#86b2b5"
  },
});

export default AudiosScreen;
