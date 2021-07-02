import React, { useState } from 'react'

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import NumberBtn from '../../components/calculator/NumberBtn'

const Calculator = () => {
  const [output, setOutput] = useState('')

  const pressNumber = (digit) => {
    const strDigit = +digit

    setOutput(output.concat(strDigit))
  }

  const pressAllClear = () => {
    setOutput('')
  }

  return (
    <View style={myStyles.container}>
      <TextInput style={myStyles.output} value={output} placeholder='This is the output' />
      <View style={myStyles.keypad}>
        <NumberBtn onPress={pressNumber} number={1} />
        <NumberBtn onPress={pressNumber} number={2} />
        <NumberBtn onPress={pressNumber} number={3} />
      </View>
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
  },
  keypad: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#616161'
  }
})

export default Calculator
