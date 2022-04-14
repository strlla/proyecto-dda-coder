import { Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  logoImageStyle: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  textInputContainer: {
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    marginTop: 16,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c3c3c4",
    width: 175
  },
  loginTextStyle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  haveAccountButtonStyle: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  haveAccountTextStyle: {
    color: "#acabb0",
  },
  dividerStyle: {
    height: 0.5,
    marginTop: 24,
    marginBottom: 12,
    borderRadius: 16,
    width: ScreenWidth * 0.8,
    alignSelf: "center",
    backgroundColor: "#ccc",
  },
  socialLoginContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  }
});
