import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/EvilIcons'
import PeopleList from './PeopleList'
import Company from './CompanyList'
import Add from './AddPerson'

const Tab = createBottomTabNavigator()

function Navigation() {
  return (
    <Tab.Navigator initialRouteName='People' screenOptions={{
        tabBarActiveTintColor: '#f5f5f5',
        tabBarInactiveTintColor: '#c5c5c5',
        tabBarStyle: {
            backgroundColor: '#967bb6'
        },
        headerStyle: {
            backgroundColor: '#967bb6'
        },
        headerTitleStyle: {
            color: '#f5f5f5',
            fontSize: 25,
            fontWeight: 'normal',
        }
    }}>
        <Tab.Screen
        name='People'
        component={PeopleList}
        options={{
            tabBarLabel: 'People',
            tabBarIcon: ({ color }) => (
                <Icon name={'user'} size={30} color={color} />
            )
        }} />
        <Tab.Screen
        name='Company'
        component={Company}
        options={{
            tabBarLabel: 'Company',
            tabBarIcon: ({ color }) => (
                <Icon name={'archive'} size={30} color={color} />
            )
        }}></Tab.Screen>
        
        <Tab.Screen
        name='Add Person'
        component={Add}
        options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ color }) => (
                <Icon name={'plus'} size={30} color={color} />
            )
        }}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default Navigation