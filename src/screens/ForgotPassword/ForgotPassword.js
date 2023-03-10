import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const ForgotPassword = () => {
  const [username, setUsername] = useState();

  const onSendPressed = () => {
    console.warn("Send");
  };

  const onSignInPressed = () => {
    console.warn("Back to sign in");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Tell us your username</Text>
      <CustomInput
        placeholder={"Username"}
        value={username}
        setValue={setUsername}
      />

      <CustomButton onPress={onSendPressed} text={"Send"} />
      <CustomButton
        onPress={onSignInPressed}
        text={"Back to sign in"}
        type={"tertiary"}
      />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "grey",
    marginVertical: 10,
    textAlign: "center",
  },
  link: {
    color: "navy",
  },
});
