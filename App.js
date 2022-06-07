import React from "react";
import {
  Node,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  isDarkMode,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.form}>
        <Text style={styles.label}>User (contextMenuHidden = false)</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Email (contextMenuHidden = true)</Text>
        <TextInput style={styles.input} contextMenuHidden={true} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  form: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 15,
  },
  label: {
    color: "black",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    height: 30,
  },
});

export default App;
