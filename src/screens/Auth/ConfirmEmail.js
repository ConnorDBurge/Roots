import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const ConfirmEmail = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: params?.username },
  });
  const user = watch("username");
  const [confirmCode, setConfirmCode] = useState(false);

  const onConfirmPressed = async ({ username, confirmation_code }) => {
    if (confirmCode) return;
    setConfirmCode(true);
    try {
      await Auth.confirmSignUp(username, confirmation_code);
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert("Ooops", e.message);
    }
    setConfirmCode(false);
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onResendCode = async () => {
    try {
      await Auth.resendSignUp(user);
      Alert.alert("Resent", "Check your email for a new code");
    } catch (e) {
      Alert.alert("Ooops", e.message);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>
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

      <CustomButton onPress={handleSubmit(onConfirmPressed)} text={"Confirm"} />

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
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
});
