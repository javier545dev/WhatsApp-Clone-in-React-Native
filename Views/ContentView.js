import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ChatScreen from './ChatScreen'
import StatusScreen from './StatusScreen'
import CallScreen from './CallScreen'
import Camera from './Camera'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomTabNavigator from './CustomTabNavigator'

export default ContentView = () => {
  const Tab = createMaterialTopTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      lazy={true}
      tabBar={(props) => <CustomTabNavigator {...props} />}
    >
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: (color) => <Icon name="camera" color={color} size={22} />,
          tabBarLabel: () => null
        }}
      />
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Estados" component={StatusScreen} />
      <Tab.Screen name="Llamadas" component={CallScreen} />
    </Tab.Navigator>
  )
}
