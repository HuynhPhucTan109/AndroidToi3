import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
function User(props){
    return (<View style={{
      marginTop:20,
      flex:20,
      width:'100%',
      backgroundColor:"#21a3d0",
      justifyContent:'center',
      alignItems:'center'
    }}   >
      <Text style={{
        color:"black",
        backgroundColor:"#21a3d0"}}>CArt</Text>
      
    </View>);
}
export default User