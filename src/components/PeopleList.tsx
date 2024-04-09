import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { init } from '../redux/contacts'
import { ContactState } from '../types'
import PeopleItem from './PeopleItem'
import { AppDispatch } from '../redux/store'

function PeopleList() {
  const dispatch = useDispatch<AppDispatch>()
  const people = useSelector((state: ContactState) => state.contacts.people)

  useEffect(() => {
    dispatch(init())
  }, [])
  return (
    <FlatList
      style={styles.container}
      data={people}
      renderItem={({ item }) => <PeopleItem people={item} />}
      keyExtractor={(_item, index) => index.toString()}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  }
})

export default PeopleList
