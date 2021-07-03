import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RestScreen = () => {
  return (
    <View style={myStyles.container}>
      <Text>Rest Screen</Text>
    </View>
  )
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default RestScreen
