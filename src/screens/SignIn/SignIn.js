import React, { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Apple, Facebook, Google, TreeHouse } from "../../../assets/images";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const onSignInPressed = () => {
    console.warn("Sign In");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  };

  const onSignUpPressed = () => {
    console.warn("Sign Up");
  };

  return (
    <View style={styles.root}>
      <TreeHouse
        style={{
          width: "50%",
          height: height * 0.3,
          maxWidth: 300,
          maxHeight: 200,
          marginBottom: 45,
        }}
      />
      <CustomInput
        placeholder={"Username"}
        value={userName}
        setValue={setUserName}
      />
      <CustomInput
        placeholder={"Password"}
        value={password}
        setValue={setPassword}
        secure
      />
      <CustomButton onPress={onSignInPressed} text={"Sign In"} />
      <CustomButton
        onPress={onForgotPasswordPressed}
        text={"Forgot password?"}
        type={"tertiary"}
      />
      <SocialSignIn />
      <CustomButton
        onPress={onSignUpPressed}
        text={"Don't have an account? Create one"}
        type={"tertiary"}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});
