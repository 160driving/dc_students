import React from 'react';
import { Text as Avenir, View } from 'react-native';

import { Text } from '_components';
import styles from './styles';

const JobSpecs = ({
  specs = [
    { title: 'Salary', value: '$80,000 / year' },
    { title: 'CPM', value: '$0.55' },
    { title: 'Starting Bouns', value: '$5000' },
    { title: 'Relocation Bonus', value: '$10,000' },
    {
      title: 'Benefits',
      value: [
        'Retirement Plan',
        'Health Coverage',
        'Dental Coverage',
        'Vision Coverage'
      ]
    }
  ]
}) => (
  <View style={styles.container}>
    {specs.map(function renderSpec({ title, value }, index) {
      if (typeof value === 'string') {
        return (
          <View key={index} style={styles.specContainer}>
            <Avenir style={styles.specTitle}>{`${title}:`}</Avenir>
            <Text style={styles.specValue}>{value}</Text>
          </View>
        );
      } else {
        return (
          <View key={index}>
            <Avenir style={styles.specTitle}>{`${title}:`}</Avenir>
            {value.map(function renderBulletPoint(item, index) {
              return (
                <View key={index} style={styles.bulletPointContainer}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.bulletedText}>{item}</Text>
                </View>
              );
            })}
          </View>
        );
      }
    })}
  </View>
);

export default JobSpecs;
