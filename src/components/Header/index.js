import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Repositórios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 60,
    maxHeight: 60,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    color: "#7159c1",
    fontWeight: "bold",
  },
});
