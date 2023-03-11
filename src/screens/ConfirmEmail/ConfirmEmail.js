import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const ConfirmEmail = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onConfirmPressed = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onResendCode = () => {
    console.warn("Resend Code");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>
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
