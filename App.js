import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";
const MainNavigation = createStackNavigator(
  {

    Home:{screen :Home  }, 
    Camera:{screen :CameraScreen}


  },
  {
    defaultNavigationOptions:{
      headerTintColor:"#fff",
      headerStyle:{
        backgroundColor:'red'
      },
      headerTitleStyle:{
        color:"#fff",
      }
    }
  }
);

const App =createAppContainer(MainNavigation);
export default App;