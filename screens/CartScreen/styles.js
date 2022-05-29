import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  list: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexGrow: 0.1,
    borderTopColor: COLORS.PURPLE,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  total: {
    fontSize: 18,
    fontFamily: "Monterey",
    padding: 8,
    color: "#212121",
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: "MontereyBold",
    padding: 8,
    color: COLORS.PURPLE,
  },
  modalText: {
    fontSize: 18,
    fontFamily: "MontereyBold",
    padding: 8,
    color: COLORS.TEXT,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    flexGrow: 0.2,
    marginTop: 300,
    backgroundColor: COLORS.BACKGROUND,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "MontereyBold",
    padding: 8,
    color: COLORS.PURPLE,
    textAlign: "center",
    width: 60,
    alignSelf: "center",
  },
  modalView: {
    flexDirection: "column",
  },
});
