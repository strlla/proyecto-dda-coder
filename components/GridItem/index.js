import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GridItem = ({ item, onSelect }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={{ ...styles.container }}
        onPress={() => onSelect(item.id, item.name)}
      >
        <View>
          <Text style={styles.title}>{item?.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 8,
  },
  title: {
    fontFamily: "MontereyBold",
    fontSize: 15,
  },
});

export default GridItem;
