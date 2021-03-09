import React from 'react';
import { StyleSheet, Text, Button,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class Home extends React.Component {
    
    static navigation ={
        title:"PhotoClicker"
    } 
render(){
 let photo = this.props.navigation.getParam("photo","empty")
  return (
    <SafeAreaView style={styles.container}>
      <Image
      resizeMode="center"
      style={styles.imgholder}
      source={
          photo === "empty" ? require("../assets/logo.jpg") : photo
        }
      />
      <TouchableOpacity style={styles.button}  onPress={()=>{
          this.props.navigation.navigate("Camera")
      }}>
          <Text style={styles.txt}>Click Photo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99AAAB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgholder:{
      alignSelf:"center",
      height:500,
      marginLeft:30,
      marginRight:30,
      marginBottom:30,
      borderRadius:20,
  },
  button:{
        backgroundColor:"red",
      paddingHorizontal:30,
        paddingVertical:20,
        borderRadius:10,
  },
  txt:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:20,
  }
});
