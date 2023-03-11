import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Apple, Facebook, Google } from "../../../assets/images";
import CustomButton from "../../components/CustomButton/CustomButton";

const onSignInGoogle = () => {
  console.warn("Sign in with Google");
};

const onSignInFacebook = () => {
  console.warn("Sign in with Facebook");
};

const onSignInApple = () => {
  console.warn("Sign in with Apple");
};

const SocialSignIn = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
        <Text style={{ width: 50, textAlign: "center", color: "grey" }}>
          or
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
      </View>

      <CustomButton
        onPress={onSignInFacebook}
        text={"Sign in with Facebook"}
        logo={
          <Facebook
            style={{
              position: "absolute",
              top: 8,
              left: 15,
              maxWidth: 32,
              maxHeight: 32,
            }}
          />
        }
        style={{
          container: { backgroundColor: "#E7EAF4" },
          text: { color: "#4765A9" },
        }}
      />
      <CustomButton
        onPress={onSignInGoogle}
        text={"Sign in with Google"}
        logo={
          <Google
            style={{
              position: "absolute",
              top: 8,
              left: 15,
              maxWidth: 34,
              maxHeight: 34,
            }}
          />
        }
        style={{
          container: { backgroundColor: "#FAE9EA" },
          text: { color: "#DD4D44" },
        }}
      />
      <CustomButton
        onPress={onSignInApple}
        text={"Sign in with Apple"}
        logo={
          <Apple
            style={{
              position: "absolute",
              top: 8,
              left: 16,
              maxWidth: 30,
              maxHeight: 30,
            }}
          />
        }
        style={{
          container: { backgroundColor: "#E3E3E3" },
          text: { color: "#363636" },
        }}
      />
    </>
  );
};

export default SocialSignIn;

const styles = StyleSheet.create({});
