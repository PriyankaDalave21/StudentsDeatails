import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { create } from 'react-test-renderer';

const StudentsDetails = ({ route }) => {
  const { student } = route.params;

  return (
    <View>
      <Text>ID: {student.id}</Text>
      <Text>Name: {student.name}</Text>
      <Text>Email: {student.email}</Text>
      <Text>Phone Number: {student.phoneNumber}</Text>
    </View>
  );
};
const style= StyleSheet.create(

)

export default StudentsDetails;
