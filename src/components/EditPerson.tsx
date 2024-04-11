import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { edit, update } from '../redux/contacts';
import { ContactState, People } from '../types';

function Edit() {

  const dispatch = useDispatch<AppDispatch>()
  const { id, firstName, lastName, email, company, phone, notes, project, people: existingPeople } = useSelector((state: ContactState) => state.contacts)

  const initialPeopleState:People = {
    id,
    firstName,
    lastName,
    email,
    company,
    phone,
    notes,
    project
  }

  const [people, setPeople] = useState<People>(initialPeopleState)


  const handleFormUpdate = (name: string, value: string) => {
    setPeople((p) => ({
      ...p,
      [name]: value,
    }))
  }

  const handleEditFormSubmitPress = () => {
    dispatch(edit(people))
    
    // remove the existing object with the contact id
    const filteredContacts = existingPeople.filter((p) => p.id !== id)

    const updatedPeople: Array<People> = [
      ...filteredContacts,
      people,
    ]

    dispatch(update({
      detailView: true,
      personSelected: null,
      people: updatedPeople,
      firstName: people.firstName,
      lastName: people.lastName,
      email: people.email,
      company: people.company,
      phone: people.phone,
      notes: people.notes,
      project: people.project
    }))
  }

  const handleEditFormCancelPress = () => {
    dispatch(update({
      detailView: true,
      personSelected: null,
    }))
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
        onPress={handleEditFormSubmitPress}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancel}
        onPress={handleEditFormCancelPress}>
        <Text style={styles.cancelText}>Cancel</Text>
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
  },

  cancel: {
    borderWidth: 2,
    borderColor: '#ff0000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  cancelText: {
    color: '#ff0000',
    fontSize: 18
  }
});

export default Edit;
