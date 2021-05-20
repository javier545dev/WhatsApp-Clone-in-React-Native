import React, { memo, useRef } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { RNCamera } from 'react-native-camera'

const Camera = () => {
  const cameraRef = useRef()

  const takePicture = async () => {
    if (cameraRef && cameraRef.current) {
      const options = {
        quality: 0.5,
        base64: true,
        orientation: RNCamera.Constants.Orientation.auto,
        fixOrientation: true
      }
      const data = await cameraRef.current.takePictureAsync(options)
      console.log(data.uri)
    }
  }
  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel'
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel'
        }}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> Press </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})
export default memo(Camera)
