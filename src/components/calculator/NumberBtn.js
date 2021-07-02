import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const NumberBtn = ({ onPress, number }) => {
  return (
    <TouchableOpacity onPress={() => onPress(number)} style={myStyles.button}>
      <Text style={myStyles.buttonText}>{number}</Text>
    </TouchableOpacity>
  )
}

NumberBtn.defaultProps = {
  onPress: (num) => { },
  number: 0
}


const myStyles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#515151',
    alignItems: 'center',
    padding: 30,
    margin: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default NumberBtn
