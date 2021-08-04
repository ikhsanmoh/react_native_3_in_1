import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const myStyles = StyleSheet.create({
  input: {
    height: 60,
    padding: 5,
    fontSize: 16
  },
  button: {
    backgroundColor: 'whitesmoke',
    padding: 9,
    margin: 5
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333'
  }
})

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')

  const onPressHandler = () => {
    onAdd(text)
    if (text === '') return
    setText('')
    Keyboard.dismiss()
  }

  return (
    <View>
      <TextInput
        placeholder='Add Task...'
        style={myStyles.input}
        value={text}
        onChangeText={val => setText(val)}
      />
      <TouchableOpacity
        style={myStyles.button}
        onPress={onPressHandler}
      >
        <Text style={myStyles.buttonText}>
          <AntDesign name="pluscircle" size={20} color="green" /> Add
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTask
