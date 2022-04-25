import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenOne = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>1</Text>
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f33',
  },
  text: {
    fontSize: 150,
  }
});
