import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";

const SignUp = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const [signUpLoading, setSignUpLoading] = useState(false);

  const password = watch("password");

  const onRegisterPressed = async ({ name, username, email, password }) => {
    if (signUpLoading) return;
    setSignUpLoading(true);
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { preferred_username: username, email, name },
      });
      navigation.navigate("ConfirmEmail", { username });
    } catch (e) {
      Alert.alert("Ooops", e.message);
    }
    setSignUpLoading(false);
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onTermsOfUse = () => {
    console.warn("Terms of Use");
  };

  const onPrivacyPolicy = () => {
    console.warn("Privacy Policy");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        control={control}
        name={"name"}
        placeholder={"Name"}
        icon={
          <MaterialCommunityIcons
            name="head-dots-horizontal-outline"
            size={24}
          />
        }
        rules={{ required: "What is your name?" }}
      />
      <CustomInput
        control={control}
        name={"username"}
        placeholder={"Username"}
        icon={<Feather name="user" size={24} />}
        rules={{ required: "Choose a username" }}
      />
      <CustomInput
        control={control}
        name={"email"}
        placeholder={"Email"}
        icon={<Feather name="mail" size={24} />}
        rules={{
          required: "Enter an email",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Enter a valid email",
          },
        }}
      />
      <CustomInput
        secure
        control={control}
        name={"password"}
        placeholder={"Password"}
        icon={<Feather name="lock" size={24} />}
        rules={{
          required: "Choose a password",
          minLength: {
            value: 3,
            message: "Password must be minimum 3 characters",
          },
        }}
      />
      <CustomInput
        secure
        control={control}
        name={"confirm_password"}
        placeholder={"Confirm Password"}
        icon={<Feather name="lock" size={24} />}
        rules={{
          validate: (val) => val === password || "Passwords do not match",
        }}
      />
      <CustomButton
        onPress={handleSubmit(onRegisterPressed)}
        text={"Register"}
      />
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
    marginTop: 40,
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
