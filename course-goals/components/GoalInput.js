import React, { useState } from 'react'
import { StyleSheet, Button, View, TextInput, Modal, Alert } from 'react-native'

/**
 * Goal Input
 * 
 * @component
 * @param {*} props the props of this js object
 * @param {boolean} visible whether or not modal is visible
 */
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }

    const emptyStringAlert = () => {
        Alert.alert(
            'Empty Input!',
            'Please input goals into text box',
            [
                {
                    text: 'Ok',
                    onPress: () => console.log('Ok pressed'),
                },
                {
                    text: 'Wtf',
                    onPress: () => console.log('Wtf pressed')
                }
            ],
            { cancelable: false }
        )
    }
    
    const addButtonHandler = () => {
        if (enteredGoal === "") {
            emptyStringAlert()
            return
        }
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="CANCEL" color='red' onPress={props.onCancel}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="ADD" onPress={addButtonHandler} />
                        </View>
                        
                    </View>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center'
      },
    input: {
        // borderBottomColor: 'black',
        width: '80%',
        borderColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        backgroundColor: 'beige'
    },
    button: {
        width: '40%',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 100,
        borderWidth: 1,
        justifyContent: 'center'
    }
})

export default GoalInput

