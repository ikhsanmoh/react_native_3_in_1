import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'
import Task from './Task'

const myStyles = StyleSheet.create({
  emptyCartText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

const Tasks = ({ tasks }) => {
  return tasks.length > 0 ? (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <Task
            task={item}
          />
        )
      }}
    />
  ) : <Text style={myStyles.emptyCartText}>No Task</Text>
}

export default Tasks
