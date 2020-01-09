import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';

const Loader = ({ visible }) => (
  <Modal style visible={visible} transparent={true}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.5,
      }}>
      <ActivityIndicator size="large" color="white" />
    </View>
  </Modal>
);

export default Loader;
