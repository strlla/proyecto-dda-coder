import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontFamily: "MontereyBold",
  },
  name: {
    fontSize: 20,
    color: "#212121",
  },
  description: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantity: {
    fontSize: 16,
    fontFamily: "Monterey",
  },
  price: {
    fontSize: 16,
    fontFamily: "Monterey",
    color: "#212121",
  },
});
