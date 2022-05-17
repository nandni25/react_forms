import React, { Component } from 'react';
import {Alert, Keyboard,TextInput,Image, Text, View } from 'react-native';
export default class login extends Component{
  constructor(props){
    super(props);
    this.state=()=>{
      this.akash="Login"
  } }
  render(){
    let new1={
      uri:'http://backgroundcheckall.com/background-images-for-login-page-4/',
      
    };
   return(
      <View style={{
        flex:1,
        padding:0,
          alignItems:'center',
        }} onpress={Keyboard.dissmiss}>
       <Image source={new1} style={{
        position:'absolute',
        width:100,
        height:100
         }}/>
         <View style={{
           width:300,
        padding:14,
           marginTop:100,
            alignItems:'center',
          height:400,
          backgroundColor:'grey',
          opacity:0.2,
          position:'relative',
          borderWidth:2,
          borderWidthColor:'blue',
         }} onpress={Keyboard.dissmiss}
      >
      <Text style={{
        position:'absolute',
        textAlign:'center',
       color:"#0000ff",
        fontSize:30,
        fontFamily:'monospace',
        fontWeight:'bold' }}  > Login</Text>
      
     <TextInput style={{
       position:'relative',
       top:90,
        justifyContent: 'space-around',
      width:250,
      fontSize:20,
        backgroundColor:'white',
      padding:10,
       KeyboardType:'default',
      height:50,
        borderWidth:2,
  color:"#00ff00",
       borderWidthColor:'blue',
       
       
     }}  placeholder="user name" placeholderTextColor={"red"}/>
        
     <TextInput style={{
       position:'relative',
       top:90,
       padding:10,
        justifyContent: 'space-around',
      width:250,
      fontSize:20,
      height:50,
  color:"#00ff00",
  backgroundColor:'white',
  borderWidth:2,
       borderWidthColor:'blue',
       KeyboardType:'default',
       
     }}  placeholder="password" placeholderTextColor={"red"} secureTextEntry="true"/>
      <View style={{top:90,
           alignItems:'center',
           position:'relative',
        width:200,
        height:50,
          borderWidth:1,
        padding:15,
        backgroundColor:'red',
        fontSize:30,
        cursor:'pointer',
         }} onpress={this.loign}>
         <Text>Login</Text>
    </View>
      </View>
   </View>
      
      
      );
  }}
  
  
  this.login=()=>{
    
    Alert.alert('you are successful login');
    
    
}
  
  
  