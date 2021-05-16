import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ChatScreen from './ChatScreen'
import StatusScreen from './StatusScreen'
import CallScreen from './CallScreen'
import Camera from './Camera'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default ContentView = () => {
  const Tab = createMaterialTopTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      lazy={true}
      tabBarOptions={{
        style: { elevation: 10 },
        tabStyle: {
          backgroundColor: '#075e54',
          borderTopWidth: 0,
          marginBottom: 4,
          width: 100
        },
        indicatorContainerStyle: { backgroundColor: '#075e54' },
        labelStyle: { fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: 'white' },
        borderColor: 'white',
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        showIcon: true,
        iconStyle: { width: 20, height: 20, margin: 0, padding: 0 }
      }}
    >
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          adaptive: true,
          tabStyle: {
            width: 20
          },
          tabBarIcon: () => <Icon name="camera" color="white" size={22} />,
          tabBarLabel: () => null
        }}
      />
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Estados" component={StatusScreen} />
      <Tab.Screen name="Llamadas" component={CallScreen} />
    </Tab.Navigator>
  )
}
