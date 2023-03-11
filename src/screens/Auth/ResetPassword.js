import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const ResetPassword = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: params?.username },
  });
  const password = watch("new_password");

  const onSubmitPressed = async ({
    username,
    confirmation_code,
    new_password,
  }) => {
    try {
      await Auth.forgotPasswordSubmit(
        username,
        confirmation_code,
        new_password
      );
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert("Ooops", e.message);
    }
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>
      <CustomInput
        control={control}
        name={"username"}
        placeholder={"Username"}
        icon={<Feather name="user" size={24} />}
        rules={{ required: "Please enter your username" }}
      />
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
