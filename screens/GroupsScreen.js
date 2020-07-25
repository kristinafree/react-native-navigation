import React from "react";
import { View, Text, StyleSheet  } from "react-native";
import Button from "../components/Button";

const GroupsScreen = ({ navigation }) => {
  const toggleMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <Text>Groups</Text>
      <Button name="Sidebar" onPress={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c47697"
  },
});

export default GroupsScreen;
