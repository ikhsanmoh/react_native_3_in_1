import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Main = () => {
  return (
    <View style={styles.main}>
      <Text>
        This is Calculator
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
})

export default Main
