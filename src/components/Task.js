import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const myStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
})

const Task = ({ task }) => {
  return (
    <TouchableOpacity
      style={myStyles.container}
      onLongPress={() => alert('Task Done')}
    >
      <View style={myStyles.listItem}>
        <Text style={myStyles.text}>
          {task.text}
        </Text>
        <Entypo
          name="circle-with-cross"
          size={20}
          color="red"
          onPress={() => alert('Task Deleted')}
        />
      </View>
    </TouchableOpacity >
  )
}

export default Task
