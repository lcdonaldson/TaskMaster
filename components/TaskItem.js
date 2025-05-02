import React from 'react';
import { View, Text } from 'react-native';

const TaskItem = React.memo(({ task, backgroundColor }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', backgroundColor }}>
      <Text>{task.title}</Text>
      <Text>Due: {task.dueDate.toDateString()}</Text>
      <Text>Priority: {task.priority}</Text>
    </View>
  );
}, (prevProps, nextProps) => 
  prevProps.task.id === nextProps.task.id && 
  prevProps.task.status === nextProps.task.status && 
  prevProps.backgroundColor === nextProps.backgroundColor);

export default TaskItem;