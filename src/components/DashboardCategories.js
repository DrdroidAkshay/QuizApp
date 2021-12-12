import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import DashboardCategoriesItem from "./DashboardCategoriesItem";

const DashboardCategories = () => {
  const categories = [
    { name: "Ethnic", key: "1" },
    { name: "Formals", key: "2" },
    { name: "Snickers", key: "3" },
    { name: "Jeans", key: "4" },
    { name: "Watches", key: "5" },
    { name: "Kurtas", key: "6" },
    { name: "T Shirts", key: "7" },
    { name: "Lowers", key: "8" },
    { name: "Shirts", key: "9" },
    { name: "Suits", key: "10" },
  ];
  return (
    <View style={styles.categoriesStyle}>
      <Text style={styles.categoriesHeadingStyle}>Categories</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => {
          // element==={item:{name:"Akshay"} index:0}
          // item==={name:"Akshay"}
          //   return <Text>{item.name}</Text>;
          return <DashboardCategoriesItem categoryname={item.name} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesStyle: {
    height: 200,
  },
  categoriesHeadingStyle: {
    fontWeight: "bold",
    margin: 15,
  },
});

export default DashboardCategories;
