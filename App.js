import React, { useState } from 'react';
import { } from 'react-native';
import AddStudents from './components/AddStudents';
import StudentsDetails from './components/StudentsDetails';
import AddNewStudents from './components/AddNewStudents';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Students Records" component={AddStudents} />
        <Stack.Screen name="AddNewStudents" component={AddNewStudents} />
        <Stack.Screen name="StudentsDetails" component={StudentsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
