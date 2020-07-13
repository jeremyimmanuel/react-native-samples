import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      padding: 50,
      flexDirection: 'row',
      width: '80%', // didn't change anything
      height: 300,
      justifyContent: 'space-around', // main axis,
      alignItems: 'center', // cross axis
    }}>
      <View
        style={{
          backgroundColor: 'red',
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
