import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { TreeHouse } from "../../../assets/images";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSignInPressed = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
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
        disableError
        control={control}
        name={"username"}
        placeholder={"Username"}
        icon={<Feather name="user" size={24} />}
        rules={{ required: "Please enter your username" }}
      />
      <CustomInput
        secure
        disableError
        control={control}
        name={"password"}
        placeholder={"Password"}
        icon={<Feather name="lock" size={24} />}
        rules={{
          required: "Please enter your password",
        }}
      />

      <CustomButton onPress={handleSubmit(onSignInPressed)} text={"Sign In"} />
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
    marginTop: 50,
  },
});
