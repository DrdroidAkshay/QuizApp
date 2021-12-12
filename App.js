import React from "react";
import { ThemeProvider } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/Homescreen";
import Header from "./src/shared/header";

const navigator = createStackNavigator(
  {
    Home: {
      screen:HomeScreen,
      navigationOptions:({navigation})=>{
        return{
      headerTitle:()=><Header navigation={navigation}/>
        }
      }
    }
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
