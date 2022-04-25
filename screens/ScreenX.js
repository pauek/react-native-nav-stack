import React from "react";
import { StyleSheet, Text, View } from "react-native";

// 9. Obtenir el 'route' dels props
const ScreenX = ({ route }) => {
  const { value } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default ScreenX;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#33f',
  },
  text: {
    fontSize: 150,
  }
});
