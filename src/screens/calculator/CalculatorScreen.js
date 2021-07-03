import React, { useState } from 'react'

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import MyButton from '../../components/calculator/MyButton'

const Calculator = () => {
  const [output, setOutput] = useState('')

  const pressNumber = (digit) => {
    const strDigit = +digit

    setOutput(output.concat(strDigit))
  }

  const pressOperator = (operand) => {
    switch (operand) {
      case '+':
      case '-':
      case 'x':
      case '/':
        setOutput(output.concat(operand))
      default:
        return
    }
  }

  const pressAllClear = () => {
    setOutput('')
  }

  const pressDelete = () => {
    setOutput(output.toString().slice(0, -1))
  }

  const getResult = () => {
    try {
      setOutput(eval(output.replace('x', '*')).toString());
    } catch (err) {
      setOutput("Error Input")
    }
  }

  return (
    <View style={myStyles.container}>
      <TextInput style={myStyles.output} value={output} />
      <View style={myStyles.keypad}>
        <View style={myStyles.row}>
          <MyButton onPress={pressAllClear} value='AC' stretch={true} color='red' />
          <MyButton onPress={pressDelete} value='DEL' color='red' />
          <MyButton onPress={pressOperator} value='/' color='blue' />
        </View>
        <View style={myStyles.row}>
          <MyButton onPress={pressNumber} value={7} />
          <MyButton onPress={pressNumber} value={8} />
          <MyButton onPress={pressNumber} value={9} />
          <MyButton onPress={pressOperator} value='x' color='blue' />
        </View>
        <View style={myStyles.row}>
          <MyButton onPress={pressNumber} value={4} />
          <MyButton onPress={pressNumber} value={5} />
          <MyButton onPress={pressNumber} value={6} />
          <MyButton onPress={pressOperator} value='+' color='blue' />
        </View>
        <View style={myStyles.row}>
          <MyButton onPress={pressNumber} value={1} />
          <MyButton onPress={pressNumber} value={2} />
          <MyButton onPress={pressNumber} value={3} />
          <MyButton onPress={pressOperator} value='-' color='blue' />
        </View>
        <View style={myStyles.row}>
          <MyButton onPress={pressNumber} value={0} />
          <MyButton onPress={getResult} value='=' stretch={true} color='blue' />
        </View>
      </View>
    </View>
  )
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525252',
  },
  output: {
    fontSize: 36,
    textAlign: 'right',
    padding: 15,
    borderWidth: 0,
    color: 'white',
    height: 120,
  },
  keypad: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  stretch: {
    flex: 1
  }
})

export default Calculator
