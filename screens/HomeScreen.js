import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// 6. Obtenir l'object 'navigation' dels props
const HomeScreen = ({ navigation }) => {
  const goToScreenOne = () => {
    // 7. Usar el navegador per anar a la pantalla posant el "name"
    navigation.navigate("one");
  };

  const goToScreenX = () => {
    // 8. Naveguem passant paràmetres (un objecte)
    navigation.navigate("x", { value: 42 });
  };

  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <View style={styles.button}>
        <Button title="Go to Screen 1" onPress={goToScreenOne}></Button>
      </View>
      <View style={styles.button}>
        <Button title="Go to Screen X" onPress={goToScreenX}></Button>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 15
  }
});
