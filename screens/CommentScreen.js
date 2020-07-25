import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const CommentScreen = ({ navigation }) => {
  const goToNotification = () => {
    navigation.navigate("Notification");
  };

  return (
    <View style={styles.container}>
      <Text>Comments</Text>
      <Button name="Message" onPress={goToNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ADD8E6"
  },
});

export default CommentScreen;
