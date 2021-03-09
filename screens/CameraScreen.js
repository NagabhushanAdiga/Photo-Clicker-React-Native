import React from 'react';
import { StyleSheet, Text, Button,Image,TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Camera} from "expo-camera";
import * as Permissions from 'expo-permissions';
import {FontAwesome} from "@expo/vector-icons";
import Constants from 'expo-constants';


export default class CameraScreen extends React.Component {
constructor(props){
    super(props);
    this.state={
        hasCameraPermission:null,
        type:Camera.Constants.Type.back,
        isFlashLighton:Camera.Constants.FlashMode.off,
    }
}

    static navigation ={
        title:"Camera"
    } 
     //ask permission

     async componentDidMount(){
       const { status} =await Permissions.askAsync(Permissions.CAMERA)
       this.setState({
         hasCameraPermission: status =="granted"
       })
     }

     //flip the camera
     flipCamera =() =>{
       this.setState({
         type:this.state.type === Camera.Constants.Type.back
         ?
         Camera.Constants.Type.front
         :
         Camera.Constants.Type.back
       })
     }

     //toggle flash light

     flashLight =()=>{
       this.setState({
         isFlashLighton:this.state.isFlashLighton === Camera.Constants.Type.FlashMode.off
         ?
         Camera.Constants.Type.FlashMode.on
         :
         Camera.Constants.Type.FlashMode.off

       })
     }
     //take picture send to home

     takePicture = async()=>{
       if (this.Camera) {
         let photo = await this.Camera.takePictureAsync();
         this.props.navigation.navigate("Home",{photo : photo});
         
       }
     }
render(){
  const {hasCameraPermission}= this.state;
  if (hasCameraPermission=== null) {
   return <View />   
  } else if (hasCameraPermission=== false) {
    return  <View><Text>Camera Access Dined</Text></View>
  }else if (hasCameraPermission=== true) {
    return (
      <View style={styles.container}>
          <Camera 
          style={styles.cameraviw}
          type={this.state.type}
          flashMode={this.state.isFlashLighton}
          ref={ref =>{
            this.Camera= ref;
          }}
          >
          <View style={styles.action}>
            <TouchableOpacity
             onPress={()=>{this.flipCamera()}}
            style={styles.iconholder}
            >
              <FontAwesome
              name="camera"
              size={35}
              style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>{this.takePicture()}}
            style={styles.iconholder}
            >
              <FontAwesome
              name="circle"
              size={35}
              style={styles.icon}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
            onPress={()=>{this.flashLight()}}
            style={styles.iconholder}
            >
              <FontAwesome
              name="flash"
              size={35}
              style={styles.icon}
              />
            </TouchableOpacity> */}
            </View>
            </Camera>
      </View>
    );
}
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraviw:{
  flex:1
  },
  action:{
      flex:1,
      flexDirection:"row",
      backgroundColor:"transparent"
  },
  iconholder:{
    flex:1,
    alignItems:"center",
    alignSelf:"flex-end"
  },
  icon:{
    marginBottom:20,
    color:"#fff",
  },
});
