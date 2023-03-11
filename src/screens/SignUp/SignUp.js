import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";

const SignUp = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const password = watch("password");

  const onRegisterPressed = (data) => {
    console.log(data);
    navigation.navigate("ConfirmEmail");
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
