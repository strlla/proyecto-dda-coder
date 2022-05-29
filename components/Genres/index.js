import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Image, FlatList } from "react-native";
import { COLORS } from "../../assets/constants/colors";
import Loading from "../Loading";
import GridItem from "../GridItem";
import { useSelector, useDispatch } from "react-redux";

const Genres = ({ onSelect }) => {
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    fetch("https://acamicaexample.herokuapp.com/categories")
      .then((response) => response.json())
      .then((newData) => {
        setData(newData);
      })
      .catch((error) => {
        Alert.alert("something went wrong D:");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelect={onSelect} />
  );

  return (
    <View>
      <Loading isLoading={loading} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 5,
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default Genres;
