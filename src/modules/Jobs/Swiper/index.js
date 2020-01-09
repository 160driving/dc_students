import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import { connect } from 'react-redux';

import { BigGreenTick } from '_assets/img';
import JobsActions from '_store/models/jobs';
import { Header, Text, EmptyScreen } from '_components';
import { Card } from './sections';
import styles, { cardVerticalMargin } from './styles';

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

class Swiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [...range(1, 50)],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () =>
      this.props.getJobsStack()
    );
  }

  screenFocused = () => {};

  onSwiped = type => {
    const newCardIndex = this.state.cardIndex + 1;
    this.setState({ cardIndex: newCardIndex });
    if (type === 'right') {
      this.acceptJob();
    }
    if (type === 'left') {
      this.refuseJob();
    }
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  getSwipedCardId = () => {
    const { jobsStack } = this.props;
    const { cardIndex } = this.state;

    return jobsStack[cardIndex].id;
  };

  acceptJob = () => {
    const jobId = this.getSwipedCardId();
    this.props.applyForJob(jobId);
  };

  refuseJob = () => {
    const jobId = this.getSwipedCardId();
    this.props.discardJob(jobId);
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  swipeRight = () => {
    this.swiper.swipeRight();
  };

  selectJob = item => {
    this.props.updateSelectedJob(item);
    this.props.navigation.navigate('JobDetails', {
      applyForJob: this.swipeRight
    });
  };

  renderCard = (card, index) => {
    if (card) {
      return (
        <Card
          goToJobOffer={() => this.selectJob(card)}
          card={card}
          index={index}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={cardVerticalMargin}
        />
      );
    }
  };

  render() {
    const { jobsStack } = this.props;
    const { cardIndex } = this.state;

    const isEmpty = cardIndex >= jobsStack.length;

    if (isEmpty) {
      return (
        <EmptyScreen
          Icon={BigGreenTick}
          title="Well Done"
          message="You swiped through all of the jobs postings. 
      Make sure to check back soon for new 
      positions available for you."
          bottomMessage="Good luck on your search!"
        />
      );
    }

    return (
      <View style={styles.container}>
        <Header title="Job Swiper" />

        <View style={styles.body}>
          {cardIndex < jobsStack.length - 2 && (
            <Card backCard={2} cardVerticalMargin={cardVerticalMargin} />
          )}

          {cardIndex < jobsStack.length - 1 && (
            <Card backCard={1} cardVerticalMargin={cardVerticalMargin} />
          )}

          <DeckSwiper
            ref={swiper => {
              this.swiper = swiper;
            }}
            marginTop={5}
            backgroundColor={'transparent'}
            onSwiped={() => this.onSwiped('general')}
            onSwipedLeft={() => this.onSwiped('left')}
            onSwipedRight={() => this.onSwiped('right')}
            onSwipedTop={() => this.onSwiped('top')}
            onSwipedBottom={() => this.onSwiped('bottom')}
            verticalSwipe={false}
            cards={jobsStack}
            cardIndex={this.state.cardIndex}
            cardVerticalMargin={cardVerticalMargin}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={2}
            stackScale={2}
            stackSeparation={0}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          />

          <View style={styles.buttonsFooter}>
            <TouchableOpacity
              style={styles.discardButton}
              onPress={this.swipeLeft}>
              <Text style={styles.discardText}>Discard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.applyButton}
              onPress={this.swipeRight}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { ...jobs };
}

export default connect(mapStateToProps, JobsActions)(Swiper);
