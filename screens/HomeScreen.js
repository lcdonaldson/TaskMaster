import React, { useState, useCallback, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { generateTasks } from '../data/mockTasks';

const HomeScreen = () => {
  const [tasks, setTasks] = useState(generateTasks());
  const [filter, setFilter] = useState(null);
  const flashListRef = useRef(null); // Ref to control FlashList

  const addTask = useCallback((newTask) => {
    setTasks(prev => [...prev, { ...newTask, id: prev.length + 1 }]);
  }, []);

  // Scroll functions
  const scrollToTop = () => {
    flashListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const scrollToBottom = () => {
    flashListRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.optionsWrapper}>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => setFilter(null)}>
              <Text style={styles.buttonTextStyle}>All Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter('Pending')}>
              <Text style={styles.buttonTextStyle}>Pending</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter('Completed')}>
              <Text style={styles.buttonTextStyle}>Completed</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={scrollToTop}>
              <Text style={styles.buttonTextStyle}>Jump to Top</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={scrollToBottom}>
              <Text style={styles.buttonTextStyle}>Jump to Bottom</Text>
            </TouchableOpacity>
          </View>
          <TaskForm onAddTask={addTask} />
        </View>
        <TaskList tasks={tasks} filterStatus={filter} ref={flashListRef} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  safeView: {
    backgroundColor: '#2E7D8A', 
    flex: 1
  },
  optionsWrapper: {
    backgroundColor: '#2E7D8A', 
    paddingTop: 10
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default HomeScreen;