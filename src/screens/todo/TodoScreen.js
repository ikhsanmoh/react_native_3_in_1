import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Tasks from '../../components/Tasks'

/**
 * TODO 1: Init neccessary components.
 * TODO 2: Set todo app base design.
 * TODO 3: Style main theme/color.
 * TODO 4: Set todo app functionality.
 * TODO 5: Test.
 * ! Est: 2-3 h.
 */

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
})

const TodoScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', day: 'Mon, 09:00 - 12:00', isDone: false },
    { id: 2, text: 'Task 2', day: 'Wed, 08:00 - 11:00', isDone: false },
    { id: 3, text: 'Task 3', day: 'Fri, 07:00 - 10:00', isDone: false },
  ])

  return (
    <View style={styles.main}>
      <Tasks tasks={tasks} />
    </View>
  )
}

export default TodoScreen
