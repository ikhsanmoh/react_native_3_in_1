import React, { useState } from 'react'
import { View, StyleSheet, Alert, ToastAndroid } from 'react-native'
import Tasks from '../../components/Tasks'
import AddTask from '../../components/form/AddTask'

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
    { id: 1, text: 'Learn MongoDB', day: '13 Jun 2021, 07:30', isDone: true },
    { id: 2, text: 'Fix bug', day: '15 Jun 2021, 15:00', isDone: false },
    { id: 3, text: 'Add time picker', day: '20 Jun 2021, 07:00', isDone: false },
  ])

  const showTaskAddedToast = () => {
    ToastAndroid.show('Task Added', ToastAndroid.SHORT)
  }

  const toggleFinishTask = (id) => {
    setTasks(prevItems => prevItems.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task))
  }

  const addTask = (name) => {
    if (name === '') return Alert.alert('Warning', 'Task input cannot be empty')

    // Set task created time
    const dateObj = new Date()
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];

    const DAY = dateObj.getDate()
    const MONTH = months[dateObj.getMonth()]
    const YEAR = dateObj.getFullYear()
    const HOUR = dateObj.getHours()
    const MINUTE = dateObj.getMinutes()

    setTasks(prevItems => {
      return [
        ...prevItems,
        {
          id: prevItems.length + 1,
          text: name,
          day: `${DAY} ${MONTH} ${YEAR}, ${HOUR}:${MINUTE}`,
          isDone: false
        }
      ]
    })
    showTaskAddedToast()
  }

  const deleteItem = (id) => {
    Alert.alert(
      'Delete Task',
      'Are you sure?',
      [
        {
          text: "Cancel",
          onPress: () => { return },
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => { onDelete() }
        }
      ]
    )

    const onDelete = () => {
      setTasks(prevItems => {
        return prevItems.filter(item => item.id !== id)
      })
    }
  }

  return (
    <View style={styles.main}>
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onDelete={deleteItem} onToggle={toggleFinishTask} />
    </View>
  )
}

export default TodoScreen
