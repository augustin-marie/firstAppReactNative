// src/components/Todo.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Todo (params){
    const todo=params.todo
    
    return(
        <View style={StyleSheet.todo}>
            <Text>{todo.label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo:{
        padding:10,
        borderTopWidth:1,
        borderStyle:'solid',
        borderColor:'lightgray'
    }
})