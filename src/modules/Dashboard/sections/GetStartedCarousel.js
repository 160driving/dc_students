import React from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { BoxShadow } from 'react-native-shadow';

import { Text } from '_components';

const win = Dimensions.get('window');

import {
  getStartedContainer,
  getStartedTitle,
  getStartedSubTitle,
  getStartedText,
  paginationContainer,
  dotStyle,
  inactiveDotStyle,
  getStartedShadow
} from '../styles';

const pagination = (entries, activeSlide) => {
  return (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      containerStyle={paginationContainer}
      dotStyle={dotStyle}
      inactiveDotStyle={inactiveDotStyle}
      inactiveDotScale={0.7}
      inactiveDotOpacity={1}
    />
  );
};

const _renderItem = ({ item, index }, goToJobs) => {
  return (
    <BoxShadow setting={getStartedShadow}>
      <TouchableOpacity style={getStartedContainer} onPress={goToJobs}>
        <Text style={getStartedTitle}>Apply to over 3000 jobs</Text>

        <Text style={getStartedSubTitle}>
          JB Hunt, Swift, Warner and more - all with just a swipe…
        </Text>

        <View style={{ flex: 1 }} />

        <Text style={getStartedText}>Get started</Text>
      </TouchableOpacity>
    </BoxShadow>
  );
};

const GetStartedCarousel = ({
  entries,
  activeSlide,
  setActiveSlide,
  goToJobs
}) => (
  <React.Fragment>
    <Carousel
      data={entries}
      renderItem={item => _renderItem(item, goToJobs)}
      onSnapToItem={index => setActiveSlide(index)}
      sliderWidth={win.width}
      itemWidth={win.width}
      firstItem={1}
    />
    {pagination(entries, activeSlide)}
  </React.Fragment>
);

export default GetStartedCarousel;
