import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { useAmplify } from "../providers/amplify-authentication";
import ConfirmEmail from "../screens/Auth/ConfirmEmail";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import Home from "../screens/Home/Home";
import ResetPassword from "../screens/Auth/ResetPassword";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const { user } = useAmplify();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
