import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Feather } from "@expo/vector-icons";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSendPressed = (data) => {
    console.log(data);
    navigation.navigate("ResetPassword");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Tell us your username</Text>
      <CustomInput
        control={control}
        name={"username"}
        placeholder={"Username"}
        icon={<Feather name="user" size={24} />}
        rules={{ required: "Please enter your username" }}
      />

      <CustomButton onPress={handleSubmit(onSendPressed)} text={"Send"} />
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
