import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Card, Avatar } from 'react-native-paper'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import { LogBox } from 'react-native'
import { FlatList } from 'react-native'

const Layout = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`'])
  }, [])

  return (
    <Card>
      <View style={{ height: 70, padding: 3, flexDirection: 'row' }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Avatar.Image
            source={{ uri: props.imgLink }}
            size={50}
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          ></Avatar.Image>
        </View>
        <View
          style={{
            flex: 5,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 5
          }}
        >
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>
            {props.username}
          </Text>
          <Text>{props.mesV}</Text>
        </View>
      </View>
    </Card>
  )
}

export default function ChatScreen() {
  const [arr, setArr] = useState([])

  if (arr.length < 10) {
    fetch('https://randomuser.me/api?results=10', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content.Type': 'application/json'
      }
    })
      .then((data) => {
        return data.json()
      })
      .then((jsonData) => {
        setArr(jsonData.results)
        console.log(arr)
      })
      .catch((err) => {
        console.log('Error ' + err.message)
      })
  }

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`'])
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={arr}
        keyExtractor={(item, _index) => item.email}
        renderItem={({ item }) => {
          return (
            <Layout
              username={item.name.first + ' ' + item.name.last}
              imgLink={item.picture.thumbnail}
              mesV={item.email + ' ' + item.phone}
            />
          )
        }}
      />

      {/* action button with conditionals */}

      {/*
            <ActionButton
                buttonColor="#075e40"
                onPress={() => { console.log("hi")}}
                position= 'right'
                renderIcon={active => active ? (<Icon name="md-close" size={20} color="#FFF"/> ) 
                                            : (<Icon name="md-logo-whatsapp" size={20} color="#FFF" />)}
            >

                <ActionButton.Item
                    buttonColor="#9b59b6"
                    title="Add to Watch Later"
                    onPress={() => alert('Added to watch later')}>
                    <Icon name="md-eye" size={20}/>
                </ActionButton.Item>

            </ActionButton>

            */}

      {/* A JSX comment */}

      <ActionButton
        buttonColor="#1abc9c"
        position="right"
        active={false}
        size={55}
      >
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => {}}
        >
          <Icon name="md-create" size={20} color="#FFF" />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}
        >
          <Icon name="md-notifications-off" size={20} color="#FFF" />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="black"
          title="All Tasks"
          onPress={() => {}}
        >
          <Icon name="md-done-all" size={20} color="#FFF" />
        </ActionButton.Item>
      </ActionButton>
    </View>
  )
}
