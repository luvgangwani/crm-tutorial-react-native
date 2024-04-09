import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PeopleItemProps } from '../types'

function PeopleItem({ people }: PeopleItemProps) {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
        <Text style={styles.title}>{people.firstName} {people.lastName}</Text>
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
    rowGap: 10,
  },

  title: {
    fontSize: 18,
    color: '#967bb6',
    paddingHorizontal: 5,
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
