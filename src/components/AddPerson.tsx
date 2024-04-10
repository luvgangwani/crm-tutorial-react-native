import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { add } from '../redux/contacts';
import { People, RootStackParamList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

function Add() {

  const dispatch = useDispatch<AppDispatch>()

  const initialPeopleState:People = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
    project: ''
  }

  const [people, setPeople] = useState<People>(initialPeopleState)

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>()

  const handleFormUpdate = (name: string, value: string) => {
    setPeople((p) => ({
      ...p,
      [name]: value,
    }))
  }

  const handleAddFormSubmitPress = () => {
    dispatch(add(people))
    setPeople(initialPeopleState)
    navigate('People')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First name"
        value={people.firstName}
        onChangeText={(value) => handleFormUpdate("firstName", value)}  
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        value={people.lastName}
        onChangeText={(value) => handleFormUpdate("lastName", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Company"
        value={people.company}
        onChangeText={(value) => handleFormUpdate("company", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="number-pad"
        value={people.phone}
        onChangeText={(value) => handleFormUpdate("phone", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={people.email}
        onChangeText={(value) => handleFormUpdate("email", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Project"
        value={people.project}
        onChangeText={(value) => handleFormUpdate("project", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={people.notes}
        onChangeText={(value) => handleFormUpdate("notes", value)}
      />

      <TouchableOpacity
        style={styles.submit}
        onPress={handleAddFormSubmitPress}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    padding: 40,
  },

  input: {
    width: 300,
    height: 50,
    borderBottomWidth: 2,
    borderColor: '#967bb6',
  },

  submit: {
    borderWidth: 2,
    borderColor: '#967bb6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  submitText: {
    color: '#967bb6',
    fontSize: 18
  }
});

export default Add;
