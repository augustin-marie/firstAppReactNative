// src/components/TodoList.js
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Todo from './Todo'

export default function TodoList(todosProp){
    const todos = todosProp.todos

    return(
        <View style={styles.todoList}>
            {todos.map(todo => (
                <Todo todo={todo} key={todo.id}></Todo>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    todoList:{
        flex:1,
        alignItems:'stretch'
    }
})