import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PeopleItemProps } from '../types'

function handlePeopleItemClick() {
  
}

function PeopleItem({ people }: PeopleItemProps) {
  return (
    <TouchableOpacity onPress={ handlePeopleItemClick } style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{people.firstName} {people.lastName}</Text>
        </View>
        <View style={styles.company}>
          <Text style={styles.companyText}>{people.company}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 1,
    paddingTop: 10,
    borderRadius: 10,
    borderColor: '#967bb6',
    rowGap: 20,
    marginBottom: 20
  },

  title: {
    paddingHorizontal: 5,
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 18,
    color: '#967bb6',
  },

  company: {
    fontSize: 14,
    backgroundColor: '#967bb6',
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  
  companyText: {
    color: '#f5f5f5',
  }
})

export default PeopleItem
