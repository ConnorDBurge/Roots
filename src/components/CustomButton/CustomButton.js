import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, logo, type = "primary", style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`], style?.container]}
    >
      {logo && logo}
      <Text style={[styles.text, styles[`text_${type}`], style?.text]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: "#3b71f3",
  },
  container_secondary: {
    borderColor: "#3b71f3",
    borderWidth: 2,
  },
  container_tertiary: {},
  text: {
    fontWeight: "bold",
  },
  text_primary: {
    color: "white",
  },
  text_secondary: {
    color: "#3b71f3",
  },
  text_tertiary: {
    color: "grey",
  },
});
