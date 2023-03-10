import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";

const SignUp = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  const onRegisterPressed = () => {
    console.warn("Register");
  };

  const onTermsOfUse = () => {
    console.warn("Terms of Use");
  };

  const onPrivacyPolicy = () => {
    console.warn("Privacy Policy");
  };

  const onSignInPressed = () => {
    console.warn("Sign In");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        placeholder={"Username"}
        value={userName}
        setValue={setUserName}
      />
      <CustomInput placeholder={"Email"} value={email} setValue={setEmail} />
      <CustomInput
        placeholder={"Password"}
        value={password}
        setValue={setPassword}
        secure
      />
      <CustomInput
        placeholder={"Confirm Password"}
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secure
      />
      <CustomButton onPress={onRegisterPressed} text={"Register"} />
      <Text style={styles.text}>
        By registering, you confirm that you accept our{"\n"}
        <Text style={styles.link} onPress={onTermsOfUse}>
          Terms of Use
        </Text>{" "}
        and{" "}
        <Text style={styles.link} onPress={onPrivacyPolicy}>
          Privacy Policy
        </Text>
        .
      </Text>
      <SocialSignIn />
      <CustomButton
        onPress={onSignInPressed}
        text={"Have an account? Sign in"}
        type={"tertiary"}
      />
    </View>
  );
};

export default SignUp;

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
