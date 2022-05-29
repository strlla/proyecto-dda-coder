import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { COLORS } from "../../assets/constants/colors";

import Book from "../../components/Book";
import Loading from "../../components/Loading";

const BookScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`https://acamicaexample.herokuapp.com/books/${route.params.id}`)
      .then((respsonse) => respsonse.json())
      .then((newData) => {
        setLoading(true);
        setData({ ...newData, price: 200 });
      })
      .catch((error) => {
        Alert.alert("Something went wrong D:");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading isLoading={true} />;
  }

  return (
    <View style={styles.container}>
      <Book book={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
  },
});

export default BookScreen;
