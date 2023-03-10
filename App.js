import { SafeAreaView, StyleSheet, Text } from "react-native";
import SignIn from "./src/screens/SignIn/SignIn";
import SignUp from "./src/screens/SignUp/SignUp";
import ConfirmEmail from "./src/screens/ConfirmEmail/ConfirmEmail";
import ForgotPassword from "./src/screens/ForgotPassword/ForgotPassword";
import ResetPassword from "./src/screens/ResetPassword/ResetPassword";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ResetPassword />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
