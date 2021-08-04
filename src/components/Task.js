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
  task: {
    maxWidth: '90%'
  }
})

const Task = ({ task, onDelete, onToggle }) => {

  const taskTextStyle = StyleSheet.create({
    text: {
      fontSize: 18,
      color: '#333',
      textDecorationLine: task.isDone ? 'line-through' : 'none'
    },
    smallText: {
      fontSize: 14,
      color: '#666'
    }
  })

  return (
    <TouchableOpacity
      style={myStyles.container}
      onLongPress={() => onToggle(task.id)}
    >
      <View style={myStyles.listItem}>
        <View style={myStyles.task}>
          <Text style={taskTextStyle.text}>
            {task.text}
          </Text>
          {task.day !== '' ?
            <Text style={taskTextStyle.smallText}>
              {task.day}
            </Text> : null}
        </View>
        <Entypo
          name="circle-with-cross"
          size={20}
          color="red"
          onPress={() => onDelete(task.id)}
        />
      </View>
    </TouchableOpacity >
  )
}

export default Task
