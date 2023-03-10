import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const ConfirmEmail = () => {
  const [code, setCode] = useState();

  const onConfirmPressed = () => {
    console.warn("Confirm");
  };

  const onResendCode = () => {
    console.warn("Resend Code");
  };

  const onSignInPressed = () => {
    console.warn("Sign In");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>
      <CustomInput
        placeholder={"Confirmation Code"}
        value={code}
        setValue={setCode}
      />

      <CustomButton onPress={onConfirmPressed} text={"Confirm"} />

      <View style={styles.buttons}>
        <CustomButton
          onPress={onSignInPressed}
          text={"Back to sign in"}
          type={"secondary"}
          style={{ container: { width: "45%" } }}
        />
        <CustomButton
          onPress={onResendCode}
          text={"Resend code"}
          type={"secondary"}
          style={{ container: { width: "45%" } }}
        />
      </View>
    </View>
  );
};

export default ConfirmEmail;

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
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
});
