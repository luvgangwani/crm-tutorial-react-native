import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ContactState } from '../types'
import { AppDispatch } from '../redux/store'
import { deletePerson, update } from '../redux/contacts'

function PeopleDetail() {

  const contacts = useSelector((state: ContactState) => state.contacts)
  const dispatch = useDispatch<AppDispatch>()

  const resetState = {
    detailView: false,
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    project: '',
    company: '',
    notes: '',
  }

  const handlePeopleDetailClosePress = () => {
    dispatch(
      update(resetState)
    )
  }

  const handleDeletePeoplePress = () => {
    if (contacts.id) {
      dispatch(deletePerson(contacts.id))
      dispatch(update(resetState))
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Name: </Text>
          <Text style={styles.text}>{contacts.firstName} {contacts.lastName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Company: </Text>
          <Text style={styles.text}>{contacts.company}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Email: </Text>
          <Text style={styles.text}>{contacts.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Phone: </Text>
          <Text style={styles.text}>{contacts.phone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Project: </Text>
          <Text style={styles.text}>{contacts.project}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Notes: </Text>
          <Text style={styles.text}>{contacts.notes}</Text>
        </View>
        <TouchableOpacity style={styles.close} onPress={ handlePeopleDetailClosePress }>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete} onPress={ handleDeletePeoplePress }>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    rowGap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  close: {
    borderWidth: 2,
    borderColor: '#967bb6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  
  text: {
    color: '#967bb6',
    fontSize: 18
  },

  closeText: {
    color: '#967bb6',
    fontSize: 18
  },
  
  delete: {
    borderWidth: 2,
    borderColor: '#ff0000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  deleteText: {
    color: '#ff0000',
    fontSize: 18
  }
})

export default PeopleDetail
