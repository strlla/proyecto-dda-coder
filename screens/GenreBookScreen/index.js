import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { filteredBook, selectBook } from "../../store/actions/books.action";
import BookItem from "../../components/BookItem";

function GenreBookScreen({ navigation }) {
  const dispatch = useDispatch();
  const genreBooks = useSelector((state) => state.books.filteredBook);
  const genre = useSelector((state) => state.genres.selected);

  useEffect(() => {
    dispatch(filteredBook(genre.id));
  }, []);

  const handleSelect = (item) => {
    dispatch(selectBook(item.id));
    navigation.navigate("Detail", {
      book: item,
    });
  };

  const renderBookItem = ({ item }) => (
    <BookItem item={item} onSelected={handleSelect} />
  );

  return (
    <View>
      <Text>Books per genre</Text>
      <FlatList
        data={genreBooks}
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GenreBookScreen;
