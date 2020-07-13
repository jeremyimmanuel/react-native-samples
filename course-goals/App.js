import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  

  const addGoalHandler = goalTitle => {
    // setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ])
    //console.log(courseGoals)
    // setEnteredGoal('')
    setIsAddMode(false)
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  /**
   * Removes Goal from array
   * @param {void} goalId the goal id of desired goal
   */
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={ cancelGoalAdditionHandler }/>
       
      <FlatList 
        keyExtractor = {(item, index) => item.id}
        data={courseGoals} 
        renderItem={
          itemData => (
            <GoalItem 
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeGoalHandler}/>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "beige"
  },
});
