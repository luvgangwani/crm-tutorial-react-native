import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { init } from '../redux/contacts'
import { ContactState } from '../types'
import PeopleItem from './PeopleItem'
import { AppDispatch } from '../redux/store'
import PeopleDetail from './PeopleDetail'

function PeopleList() {
  const dispatch = useDispatch<AppDispatch>()
  const people = useSelector((state: ContactState) => state.contacts.people)
  const detailView = useSelector((state: ContactState) => state.contacts.detailView)

  useEffect(() => {
    dispatch(init())
  }, [])

  const renderPeopleList = () => {
    let returnView = <FlatList
    style={styles.container}
    data={people}
    renderItem={({ item }) => <PeopleItem people={item} />}
    keyExtractor={(_item, index) => index.toString()}
  />
    if (detailView) returnView = <PeopleDetail />

    return returnView
  }

  return renderPeopleList()

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  }
})

export default PeopleList
