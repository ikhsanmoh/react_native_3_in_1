import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Main = ({ children }) => {
  return (
    <View style={styles.main}>
      {children}
    </View>
  )
}

Main.defaultProps = {
  children: <Text>Main</Text>
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
})

export default Main
