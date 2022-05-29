import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "../../assets/constants/colors";

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.PURPLE} />
    </View>
  ) : (
    false
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
  },
});

export default Loading;
