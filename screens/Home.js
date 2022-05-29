import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { COLORS } from "../assets/constants/colors";
import Genre from "../components/Genre";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Genre
        id="0"
        limit={3}
        disableInfiniteScroll={true}
        onSelect={(id) => {
          navigation.navigate("Book", { id });
        }}
      />
      <Button
        title="Check the categories"
        onPress={() => {
          navigation.navigate("BooksStack");
        }}
        color={COLORS.PURPLE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default HomeScreen;
