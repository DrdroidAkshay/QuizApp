import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Card } from "react-native-elements";

const DashboardProductItem = (props) => {
  return (
    <Card containerStyle={styles.productContainerStyle}>
      <View style={styles.imageContainerStyle}>
        {/* <ImageBackground
          source={require("../assets/dashboardImage.jpg")}
          style={styles.imageStyle}
        /> */}
      </View>
      <Text style={styles.textStyle}>T</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 240,
    width: "100%",
  },
  textStyle: {
    marginTop: 10,
  },
  productContainerStyle: {
    alignItems: "center",
    flexDirection: "column",
    height: 300,
    padding: 8,
    backgroundColor: "red",
    width: "50%",
    margin: 0,
  },
  imageContainerStyle: {
    padding: 10,
  },
});

export default DashboardProductItem;
