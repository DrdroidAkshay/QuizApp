import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DashboardMainImage = () => {
  return (
    <View>
      <Image
        source={require("../assets/dashboardImage.jpg")}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    resizeMode: "cover",
  },
});

export default DashboardMainImage;
