import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.menuIcon}
      />
      <View>
        <Text style={styles.headerText}>StoreApp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "400",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  menuIcon: {
    marginRight: 10,
  },
});
