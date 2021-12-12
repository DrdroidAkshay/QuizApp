import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DashboardCategories from "../components/DashboardCategories";
import DashboardProducts from "../components/DashboardProducts";
import DashboardMainImage from "../components/DashboardMainImage";

const HomeScreen = () => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.dashboardMainImageStyle}>
        <DashboardMainImage />
      </View>
      <DashboardCategories />
      <DashboardProducts />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 10,
  },
  dashboardMainImageStyle: {},
});

export default HomeScreen;
