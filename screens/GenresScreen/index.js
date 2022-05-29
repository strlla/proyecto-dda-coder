import React from "react";
import { View, StyleSheet } from "react-native";
import Genres from "../../components/Genres";

function GenresScreen({ navigation }) {
  const onSelectGenre = (id, name) => {
    console.log("hola")
    navigation.navigate("Genre", { id, name });
  };

  return (
    <View style={styles.container}>
      <Genres onSelect={onSelectGenre} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
  },
});

export default GenresScreen;
