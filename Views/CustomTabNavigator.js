import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'

export default function CustomTab(props) {
  const { navigation, state, descriptors } = props
  const onPress = (route, isFocused) => () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }

  const onLongPress = (route) => () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key
    })
  }

  const renderTabBar = (route, id) => {
    const isFocused = state.index === id
    const { options } = descriptors[route.key]
    const { tabBarIcon, tabBarLabel } = options
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress(route, isFocused)}
        onLongPress={onLongPress(route)}
        style={[
          route.name === 'Camera' ? styles.buttonCamera : styles.button,
          isFocused && styles.buttonBorder
        ]}
        key={route.routeName}
      >
        {tabBarIcon ? tabBarIcon(isFocused ? '#1abc9c' : '#bfbfbf') : null}
        {tabBarLabel ? tabBarLabel() : null}
        {
          <Text
            style={[
              styles.buttonText,
              isFocused ? styles.buttonTextIsActive : styles.buttonText
            ]}
          >
            {label}
          </Text>
        }
      </Pressable>
    )
  }

  const tabBarButtons = state?.routes?.map(renderTabBar)
  return <View style={styles.container}>{tabBarButtons}</View>
}
const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-between',
    backgroundColor: '#013227'
  },
  button: {
    flex: 1
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#bfbfbf',
    textAlign: 'center'
  },
  buttonTextIsActive: {
    color: '#1abc9c'
  },
  buttonCamera: {
    flexBasis: 50,
    alignItems: 'center'
  },
  buttonBorder: {
    borderBottomWidth: 3,
    borderBottomColor: '#1abc9c'
  }
})
