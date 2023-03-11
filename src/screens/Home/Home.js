import { Auth } from "aws-amplify";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton/CustomButton";
import { useAmplify } from "../../providers/amplify-authentication";

const Home = () => {
  const { user } = useAmplify();
  console.log({ user });

  const onLogout = async () => {
    await Auth.signOut();
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Welcome Home</Text>
      <CustomButton onPress={onLogout} text={"Logout"} />
    </View>
  );
};

export default Home;

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
});
