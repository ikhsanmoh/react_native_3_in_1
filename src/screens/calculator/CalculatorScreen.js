import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const Calculator = () => {
  const [output, setOutput] = useState('')

  const pressNumber = (digit) => {
    const strDigit = +digit

    setOutput(output.concat(strDigit))
  }
  const allClear = () => {
    setOutput('')
  }
  const backspace = () => { }
  const calculate = () => { }


  return (
    <View style={myStyles.container}>
      <TextInput style={myStyles.output} value={output} placeholder='This is the output' />
    </View>
  )
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  output: {
    fontSize: 24,
    textAlign: 'right',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    height: 100,
  }
})

export default Calculator
