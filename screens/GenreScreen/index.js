import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Book from "../../components/Book";
import Genre from "../../components/Genre";

function GenreBookScreen({ navigation, route }) {
  const handleSelectBook = (id) => {
    navigation.navigate("Book", {
      id,
    });
  };

  return (
    <View style={styles.container}>
      <Genre id={route.params.id} onSelect={(id) => handleSelectBook(id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
  },
});

export default GenreBookScreen;
