import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import ProductItem from "./ProductItem";

const DashboardProducts = () => {
  const products = [
    { name: "T Shirt", key: "1" },
    { name: "Shoes", key: "2" },
    { name: "Jacket", key: "3" },
    { name: "Jeans", key: "4" },
    { name: "Watches", key: "5" },
    { name: "Kurtas", key: "6" },
    { name: "Lowers", key: "7" },
  ];

  return (
    <View style={styles.productsStyle}>
      <View style={styles.dashboardproductsHeaderStyle}>
        <Text style={styles.productsHeadingStyle}>Products</Text>
        <Text style={styles.productsViewStyle}>View All</Text>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem />}
        keyExtractor={(item) => item.key}
        numColumns={2}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productsStyle: {
    backgroundColor: "#DCDCDC",
    padding: 5,
  },
  productsHeadingStyle: {
    fontWeight: "bold",
    margin: 15,
  },
  productsViewStyle: {
    fontWeight: "bold",
    margin: 15,
    color: "#703003",
  },
  dashboardproductsHeaderStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  itemContainer: {
    padding: 1,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: "white",
  },
});

export default DashboardProducts;
