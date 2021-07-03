import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const MyButton = ({ onPress, value, stretch, color }) => {

  let bgColor, txtColor
  if (color === 'red') {
    bgColor = '#CA3E47'
    txtColor = 'white'
  } else if (color === 'orange') {
    bgColor = '#D65A31'
    txtColor = 'white'
  } else if (color === 'blue') {
    bgColor = '#053F5E'
    txtColor = 'white'
  } else {
    bgColor = '#414141'
    txtColor = 'white'
  }

  const myStyles = StyleSheet.create({
    button: {
      flex: stretch ? 1 : 0,
      minWidth: 80,
      paddingTop: 25,
      paddingBottom: 25,
      margin: 5,
      borderRadius: 5,
      backgroundColor: bgColor,
      alignItems: 'center',
    },
    buttonText: {
      color: txtColor,
      fontSize: 20,
      fontWeight: 'bold'
    }
  })

  return (
    <TouchableOpacity onPress={() => onPress(value)} style={myStyles.button}>
      <Text style={myStyles.buttonText}>{value}</Text>
    </TouchableOpacity>
  )
}

MyButton.defaultProps = {
  onPress: (val) => { },
  value: 0,
  stretch: false,
  color: ''
}

export default MyButton
