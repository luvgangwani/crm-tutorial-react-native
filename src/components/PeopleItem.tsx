import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PeopleItemProps } from '../types'

function PeopleItem({ people }: PeopleItemProps) {
  return (
    <View>
        <Text>{people.firstName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default PeopleItem
