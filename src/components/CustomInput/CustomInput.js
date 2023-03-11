import React, { cloneElement } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, TextInput, View, Text } from "react-native";

const CustomInput = ({
  placeholder,
  secure,
  icon,
  name,
  control,
  disableError = false,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          {error && !disableError && (
            <Text
              style={{ color: "#B71C1C", alignSelf: "stretch", fontSize: 12 }}
            >
              {error.message || "Error"}
            </Text>
          )}
          <View
            style={[
              styles.container,
              { borderColor: error ? "#B71C1C" : "#E8E8E8" },
            ]}
          >
            {icon && (
              <View
                style={[
                  styles.icon,
                  { borderRightColor: error ? "#B71C1C" : "#E3E3E3" },
                ]}
              >
                {cloneElement(icon, {
                  style: { color: error ? "#B71C1C" : "grey" },
                })}
              </View>
            )}
            <TextInput
              value={value}
              placeholder={placeholder}
              secureTextEntry={secure}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[styles.input]}
            />
          </View>
        </>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: "88%",
  },
  icon: {
    width: 32,
    marginRight: 8,
    borderRightColor: "#E3E3E3",
    borderRightWidth: 1,
  },
});
