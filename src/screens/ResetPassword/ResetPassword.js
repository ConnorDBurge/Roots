import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const ResetPassword = () => {
  const [code, setCode] = useState();
  const [password, setPassword] = useState();

  const onSubmitPressed = () => {
    console.warn("Submit");
  };

  const onSignInPressed = () => {
    console.warn("Back to sign in");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        placeholder={"Confirmation Code"}
        value={code}
        setValue={setCode}
      />
      <CustomInput
        placeholder={"New password"}
        value={password}
        setValue={setPassword}
      />

      <CustomButton onPress={onSubmitPressed} text={"Submit"} />
      <CustomButton
        onPress={onSignInPressed}
        text={"Back to sign in"}
        type={"tertiary"}
      />
    </View>
  );
};

export default ResetPassword;

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
