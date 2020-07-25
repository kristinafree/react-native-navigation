import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Button from '../components/Button'

const AnotherScreen = ({ navigation }) => {
  const toggleMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <Text>More</Text>
      <Button name='Sidebar' onPress={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#BC8F8F'
  },
});

export default AnotherScreen;
