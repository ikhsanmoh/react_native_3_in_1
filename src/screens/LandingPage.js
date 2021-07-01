import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/base/Header'
import Main from '../components/base/Main'

const LandingPage = () => {
  return (
    <View style={myStyles.landingPage}>
      <Header title="Calculator" />
      <Main />
    </View>
  )
}

const myStyles = StyleSheet.create({
  landingPage: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    width: '100%'
  }
})

export default LandingPage
