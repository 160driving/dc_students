import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { BoxShadow } from 'react-native-shadow';

import { Text } from '_components';
import styles, { jobRequestCardShadow } from './styles';

const JobRequest = ({
  isModalVisible,
  onMoreInfoPressed,
  onAcceptPressed,
  onDeclinePressed
}) => (
  <View style={styles.jobRequestContainer}>
    <Modal
      isVisible={isModalVisible}
      animationIn="slideInDown"
      // animationOut="slideOutUp"
      hasBackdrop={false}
      coverScreen={false}
      customBackdrop={<View style={{ flex: 1 }} pointerEvents="box-none" />}
      style={styles.jobRequestModal}>
      <BoxShadow setting={jobRequestCardShadow}>
        <View style={styles.jobRequestCard}>
          <Text style={styles.jobRequestTitle}>You received an offer!</Text>

          <Text style={styles.jobRequestSubTitle}>
            Feel free to continue the conversation.
          </Text>

          <View style={styles.jobRequestButtons}>
            <TouchableOpacity
              onPress={onAcceptPressed}
              style={styles.jobRequestAccept}>
              <Text style={styles.jobRequestButtonText}>Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onDeclinePressed}
              style={styles.jobRequestDecline}>
              <Text style={styles.jobRequestButtonText}>Decline</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onMoreInfoPressed}
              style={styles.jobRequestInfo}>
              <Text style={styles.jobRequestInfoText}>More Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BoxShadow>
    </Modal>
  </View>
);

export default JobRequest;
