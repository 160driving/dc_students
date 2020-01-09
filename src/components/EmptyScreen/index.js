import React from 'react';
import { Text as Avenir, View } from 'react-native';

import { GREEN } from '_constants/colors';
import { Text } from 'components';
import styles from './styles';

const EmptyScreen = ({ Icon, title, message, bottomMessage }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Icon style={styles.img} />
    <Avenir style={styles.message}>{message}</Avenir>
    <Avenir style={[styles.message, { color: GREEN, marginTop: 14 }]}>
      {bottomMessage}
    </Avenir>
  </View>
);

export default EmptyScreen;
