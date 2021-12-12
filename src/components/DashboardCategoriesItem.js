import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DashboardCategoriesItem = (props) => {
  return (
    <View style={styles.imageStyle}>
      <Text>{props.categoryname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 5,
    backgroundColor: "#DCDCDC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
  },
});

export default DashboardCategoriesItem;
