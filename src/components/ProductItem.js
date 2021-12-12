import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

const ProductItem = (props) => {
  return (
    <View
      style={{
        width: "50%",
        padding: 4,
      }}
    >
      <Card containerStyle={styles.productContainerStyle}>
        <Image
          source={require("../assets/SWEATERS.jpg")}
          style={styles.imageStyle}
        />
        <Text
          style={{
            position: "relative",
            backgroundColor: "pink",
            color: "white",
            padding: 4,
            marginTop: 2,
            alignSelf: "flex-start",
          }}
        >
          Nike
        </Text>
        <Text>Men's Cotton Dark T-shirt</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainerStyle: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    margin: 0,
    marginHorizontal: "auto",
    borderWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: 300,
  },
  imageStyle: {
    height: 220,
    maxWidth: "100%",
  },
});

export default ProductItem;
