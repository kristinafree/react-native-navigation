import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from '../components/Button'

const NotificationScreen = ({ navigation }) => {
  const goToComment = () => {
    navigation.navigate("Comment");
  };

  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
      <Button style={{color:'#E6E6FA'}} name="Cmnt" onPress={goToComment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDA0DD"
  },
});

export default NotificationScreen;
