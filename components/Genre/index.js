import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  TouchableHighlight,
} from "react-native";
import Loading from "../Loading";
import { COLORS } from "../../assets/constants/colors";

const Genre = ({ id, page, disableInfiniteScroll, onSelect }) => {
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(page || 1);
  const [limit, setLimit] = useState(15);
  const [loading, setLoading] = useState(false);
  const [noMore, setNoMore] = useState(disableInfiniteScroll || false);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const getData = () => {
    setLoading(true);
    fetch(
      `https://acamicaexample.herokuapp.com/books?category_id=${id}&_page=${page}&_limit=${limit}`
    )
      .then((res) => res.json())
      .then((newData) => {
        setData([...data, ...newData]);
        setNoMore(noMore || newData.length < limit);
      })
      .catch((error) => {
        Alert.alert("Something went wrong D:");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadMore = () => {
    if (loading || noMore) return;
    setPage(currentPage + 1);
  };


  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };
  
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={COLORS.PURPLE}
            style={styles.listItem}
            onPress={()=>onSelect(item.id)}
          >
            <Text>
              {item.name} by {item.author}
            </Text>
          </TouchableHighlight>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.01}
        ListFooterComponent={<Loading isLoading={loading} />}
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

export default Genre;
