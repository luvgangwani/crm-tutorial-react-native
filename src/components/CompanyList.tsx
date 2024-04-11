import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ContactState} from '../types';
import _ from 'lodash';

function Company() {
  const people = useSelector((state: ContactState) => state.contacts.people);

  const groupByCompany = _.groupBy(people, 'company');

  const renderCompanyList = () => (
    <View style={styles.container}>
      {Object.keys(groupByCompany).map((key, ix) => (
        <View style={styles.company} key={ix}>
          <Text style={styles.title}>{key}</Text>
          <View style={styles.names}>
            {groupByCompany[key].map((people, index) => (
              <Fragment key={index}>
                <Text style={styles.name}>
                  {people.firstName} {people.lastName}
                </Text>
              </Fragment>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
  return renderCompanyList();
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    rowGap: 20,
  },

  company: {
    rowGap: 10,
  },

  title: {
    fontSize: 22,
    color: '#967bb6',
  },

  names: {
    paddingHorizontal: 20,
    rowGap: 10,
  },

  name: {
    fontSize: 18,
  },
});

export default Company;
