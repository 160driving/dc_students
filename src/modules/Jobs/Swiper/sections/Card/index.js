import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

import { Text, Image } from '_components';
import styles, { cardShadow } from './styles';
import { employmentTypes, jobTypes } from '../../../values';

const InfoDot = ({ type, value }) => {
  if (value) {
    let info = '';
    switch (type) {
      case 0:
        info = `Up to $${value} per year`;
        break;

      case 1:
        info = `Up to $${value} CPM`;
        break;

      case 2:
        info = `$${value} Starting Bonus`;
        break;

      case 3:
        info = `$${value} Relocation Bonus`;
        break;

      default:
        break;
    }

    return (
      <View style={styles.listItem}>
        <View style={styles.listDot} />
        <Text style={styles.listText}>{info}</Text>
      </View>
    );
  }
  return <View />;
};
const Card = ({ card, backCard, cardVerticalMargin, goToJobOffer }) => {
  const extraStyle =
    backCard === 1
      ? { ...styles.firstBackCard, top: cardVerticalMargin }
      : backCard === 2
      ? { ...styles.secondBackCard, top: cardVerticalMargin }
      : {};

  return (
    <View style={[styles.card, extraStyle]}>
      <BoxShadow setting={cardShadow}>
        {!backCard ? (
          <View style={styles.cardContainer}>
            <Image imageName={card.logo} />

            <Text style={styles.title}>{card.title}</Text>

            <Text style={styles.cityText}>
              {card.city}, {card.state}
            </Text>

            <Text style={styles.cardText}>
              {employmentTypes[card.employmentType]}
            </Text>

            <Text style={styles.cardText}>{jobTypes[card.jobType]}</Text>

            <View style={styles.listContainer}>
              <InfoDot value={card.minSalary} type={0} />

              <InfoDot value={card.minPerMile} type={1} />

              <InfoDot value={card.startingBonus} type={2} />

              <InfoDot value={card.relocationBonus} type={3} />
            </View>

            <TouchableOpacity
              onPress={goToJobOffer}
              style={styles.moreInfoButton}>
              <Text style={styles.moreInfoText}>More Information</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.cardContainer} />
        )}
      </BoxShadow>
    </View>
  );
};

export { Card };
