import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TimeAgo from 'react-native-timeago';
import moment from 'moment';

import { Text } from '_components';
import { Email, Envelope, Portfolio } from '_assets/img';
import { GREY_TEXT, SKY, GREEN } from '_constants/colors';
import * as styles from '../styles';

const getCardTheme = (status, offers = []) => {
  const getDefaultType = (disabled = false) => [
    {
      color: GREY_TEXT,
      icon: <Email />,
      disabled
    },
    {
      color: SKY,
      icon: <Envelope />,
      disabled
    }
  ];

  const offerTheme = [
    {
      color: GREEN,
      icon: <Portfolio />,
      disabled: false
    },
    {
      color: GREEN,
      icon: <Portfolio />,
      disabled: false
    }
  ];

  switch (status) {
    case 'NEW':
      return getDefaultType();

    case 'CONTACT_LATER':
      return getDefaultType();

    case 'REJECTED':
      return getDefaultType(true);
    case 'MADE_OFFER':
      const sortedOffers = offers.sort((a, b) => b.id - a.id);
      const lastOffer = sortedOffers[0];
      if (lastOffer.status === 'NEW') {
        return offerTheme;
      } else if (lastOffer.status === 'ACCEPTED') {
        return getDefaultType();
      } else {
        return getDefaultType(true);
      }

    default:
      return getDefaultType();
  }
};

const Card = ({
  id,
  createdAt,
  firebaseId,
  jobTitle,
  lastMessage = {},
  goToChat,
  isMessageNotSeenMode,
  status,
  offers
}) => {
  const theme = getCardTheme(status, offers);
  const type = isMessageNotSeenMode(lastMessage) ? 1 : 0;

  const { color, icon, disabled } = theme[type];

  return (
    <TouchableOpacity
      style={styles.cardStyle}
      onPress={() => goToChat(firebaseId, type === 1, disabled, id, jobTitle)}>
      <View style={[styles.cardContainer, disabled && styles.disabledCard]}>
        <View style={styles.cardImageContainer}>{icon}</View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.cardTitle, { color }]}>{jobTitle || ''}</Text>

          {lastMessage.text ? (
            <View style={styles.subContainer}>
              <Text style={styles.cardSubTitle}>{lastMessage.text}</Text>

              <TimeAgo
                time={new Date(lastMessage.createdAt)}
                style={styles.cardTimeText}
              />
            </View>
          ) : (
            <View style={styles.subContainer}>
              <Text style={styles.cardSubTitle}>
                Applied on {moment(createdAt).format('DD/MM/YYYY HH:mm')}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
