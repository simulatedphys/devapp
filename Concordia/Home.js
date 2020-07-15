import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Alert } from 'react-native'
import { NativeRouter } from "react-router-native";
import { Alert } from "react-native";

class Inputs extends Component {
   
   render() {
      return (
        
         <View style = {styles.container}>
            <View style = {styles.welcome}>
            <Text style = {styles.text}>Добро пожаловать</Text>
            <Text style = {styles.text}>в приложение Concordia.</Text>
          
            <Text style = {styles.text}>Для продолжения войдите</Text>
            <Text style = {styles.text}>в аккаунт или</Text>
            <Text style = {styles.text}>зарегистрируйтесь.</Text>
            </View>
            
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Войти </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Зарегистрироваться </Text>
            </TouchableOpacity>

            <Button style= {styles.underline}
              onPress={() => setCount(count + 1)}
              title="Забыли пароль?"
              color="black"
              accessibilityLabel="Click this button to restore pass"
              
            />
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#000000',
      padding: 17 ,
      margin: 10 ,
      height: 50,
      justifyContent: "center",
      flexDirection: "row",
      justifyContent: "space-evenly"
   },
   submitButtonText:{
      fontSize: 20,
      height: 20,
      
      
      color: "white"
   },
   text:{
    
    fontSize: 25,
    height: 30,
    color: "black",
    fontStyle: "italic",
    textAlign:"center",
    fontWeight: "normal",
   },
   underline:{
    textDecorationLine:'underline line-through',
   },
   welcome:{
  paddingVertical:80,
   }
})

