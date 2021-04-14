import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import ContentView from "./Views/ContentView";
import { IconButton, Colors } from 'react-native-paper';
import { StatusBar } from 'react-native';

export default function App() {

  const Stack = createStackNavigator()

  return (
        <NavigationContainer>
          <StatusBar backgroundColor='#075e54' barStyle='light-content' />
          <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#075e54'}, headerTintColor: 'white'}}>
            <Stack.Screen name="WhatsApp Clone JF" component={ContentView} options={{
              headerStyle: {
                    backgroundColor: "#075e54",
                    elevation: 0}, // se elimina el sombredo dentro de un contenedor
                    
              headerRight: () => {
                return <View style={{flexDirection: 'row'}}>
                  <IconButton
                            icon="magnify"
                            color={Colors.white}
                            onPress={() => console.log('Pressed')}
                  />
                  <IconButton
                            icon="dots-vertical"
                            color={Colors.white}
                            onPress={() => console.log('Pressed')}
                  />
                </View>
              }
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}
