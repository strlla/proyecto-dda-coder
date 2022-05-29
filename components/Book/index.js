import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/cart.action";
import { COLORS } from "../../assets/constants/colors";

const Book = ({ book }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setMessage("");
  }, [book]);
  
  const handleAddToCart = () => {
    dispatch(addItem(book));
    setMessage("Book added!");
  };

  return (
    <View style={styles.bookContainer}>
      <View style={styles.bookHeaderContainer}>
        <View style={styles.bookImage}>
          <Image
            style={{ width: 60, height: 90 }}
            source={{ uri: book.image }}
          />
        </View>
        <View style={styles.bookAuthor}>
          <Text>
            by <Text style={styles.bookAuthorText}> {book.author}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.bookDescriptionContainer}>
        <Text>{book.description}</Text>
      </View>
      <Text style={{...styles.bookAuthorText, ...styles.message}}>{message}</Text>
      <View style={styles.bookButtonsContainer}>
        <Button
          title="Add to cart"
          onPress={() => handleAddToCart()}
          color={COLORS.PURPLE}
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
    alignSelf: "stretch",
  },
  bookHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.PURPLE,
  },
  bookDescriptionContainer: {
    flex: 3,
    padding: 4,
    backgroundColor: COLORS.BACKGROUND,
  },
  bookButtonsContainer: {
    height: 50,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: COLORS.BACKGROUND
  },
  bookImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bookAuthor: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  bookAuthorText: {
    fontSize: 20,
  },
  bookButtons: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  message: {
    textAlign:  "center"
  }
});

export default Book;
