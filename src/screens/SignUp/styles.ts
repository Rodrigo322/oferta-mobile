import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#019972",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputArea: {
    width: "100%",
    padding: 40,
  },
  input: {
    backgroundColor: "#53bda2",
    width: "100%",
    height: 60,
    borderRadius: 7,
    marginBottom: 15,
    alignItems: "center",
    paddingLeft: 20,
  },
  buttonSignIn: {
    height: 60,
    backgroundColor: "#DFEDE9",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSignInText: {
    fontSize: 18,
    color: "#019972",
  },
  signMessage: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  signMessageText: {
    fontSize: 16,
    color: "#FFF",
  },
  signMessageTextBold: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
