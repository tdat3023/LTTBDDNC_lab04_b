import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

export default function Screen3({ navigation }) {
  return (
    <View style={styles.AndroidSafeArea}>
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
