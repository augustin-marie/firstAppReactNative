// src/components/App.js

import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import TodoList from './TodoList'

export default function App() {
    const state = {
        todos:[
            {id:1, label:'Buy some milk'},
            {id:2, label:'Learn some react'},
            {id:3, label:'Beat Dream'}
        ]
    }

    const {todos} = state

  return (
    <View style={styles.container}>
      <TodoList todos={todos}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
});
