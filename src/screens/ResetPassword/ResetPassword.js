import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ResetPassword = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const password = watch("new_password");

  const onSubmitPressed = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        control={control}
        name={"confirmation_code"}
        placeholder={"Confirmation Code"}
        icon={
          <MaterialCommunityIcons name="two-factor-authentication" size={24} />
        }
        rules={{ required: "Please enter a confirmation code" }}
      />
      <CustomInput
        secure
        control={control}
        name={"new_password"}
        placeholder={"New password"}
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
        name={"confirm_new_password"}
        placeholder={"Confirm New password"}
        icon={<Feather name="lock" size={24} />}
        rules={{
          validate: (val) => val === password || "Passwords do not match",
        }}
      />

      <CustomButton onPress={handleSubmit(onSubmitPressed)} text={"Submit"} />
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
