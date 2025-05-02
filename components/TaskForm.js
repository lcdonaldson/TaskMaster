import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title) {
      onAddTask({
        title,
        dueDate: new Date(),
        priority: 'Medium',
        status: 'Pending',
      });
      setTitle('');
    }
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="New Task"
        placeholderTextColor="#FFFFFF"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonTextStyle}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {alignSelf: 'center'},
  buttonTextStyle: {
    color: '#fff', 
    fontWeight: '600', 
    fontSize: 16
  },
  inputWrapper: { 
    margin: 15, 
    padding: 5 
  },
  textInput: {
    borderColor: '#fff', 
    borderWidth: 3, 
    padding: 5, 
    marginBottom: 15, 
    color: '#fff'
  }
});

export default TaskForm;