import { StyleSheet, View } from "react-native";

import Navigation from "./src/navigation";
import { AmplifyAuthentication } from "./src/providers/amplify-authentication";

export default function App() {
  return (
    <View style={styles.root}>
      <AmplifyAuthentication>
        <Navigation />
      </AmplifyAuthentication>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
