import React, { Component, Fragment } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { Header, Text, Gauge, GradientView } from '_components';
import { hasOpenedDashboardBefore } from '_helpers/storage';
import { GetStartedCarousel } from './sections';
import { SettingsIcon } from '_assets/img';
import DashboardActions from '_store/models/dashboard';
import {
  UNSUCCESSFUL,
  NEEDS_IMPROVEMENT,
  SATISFACTORY,
  PROFICIENT,
  GRADIENT_BLUE
} from '_constants/colors';

import {
  preTripContainer,
  totalHoursStyle,
  totalAbsencesStyle,
  preTripGauge,
  preTripTitleStyle,
  preTripStatusStyle,
  tapToPractice,
  roadSkillsContainer,
  roadContainer,
  skillsContainer,
  roadSkillTitleStyle,
  roadSkillStatusStyle,
  generalKnowledgeButtonGradientStyle,
  generalKnowledgeTextStyle,
  tapToTakePracticeTestTextStyle
} from './styles';

class Dashboard extends Component {
  state = {
    entries: ['0', '1', '2'],
    activeSlide: 1,
    openedBefore: false
  };

  componentDidMount() {
    const { getAttendanceInfo } = this.props;
    AsyncStorage.setItem('dashboardOpened', 'yes');
    hasOpenedDashboardBefore().then(openedBefore => {
      this.setState({ openedBefore });
    });
    getAttendanceInfo();
  }

  goToJobs = async () => {
    const { navigation } = this.props;
    navigation.navigate('Jobs');
  };

  takePracticeTestPressed = () => {};

  getPerformanceStatus = type => {
    const { performance } = this.props;

    const performanceMapping = {
      UNSUCCESFUL: 'Unsuccessful',
      'NEEDS IMPROVEMENT': 'Needs improvement',
      SATISFACTORY: 'Satisfactory',
      PROFICIENT: 'Proficient'
    };

    if (performance[type]) {
      const currentPerformance = performance[type].currPerformance;
      return performanceMapping[currentPerformance];
    }

    return 'No info';
  };

  getPerformance = type => {
    const { performance } = this.props;
    const performanceType = performance[type];

    return performanceType ? performanceType.currPerformance : '';
  };

  generateColorFromResult = type => {
    const { performance } = this.props;
    const performanceType = performance[type] || {};

    switch (performanceType.currPerformance) {
      case 'UNSUCCESFUL':
        return UNSUCCESSFUL;
      case 'NEEDS IMPROVEMENT':
        return NEEDS_IMPROVEMENT;
      case 'SATISFACTORY':
        return SATISFACTORY;
      case 'PROFICIENT':
        return PROFICIENT;
      default:
        return '#A0A0A0';
    }
  };

  render() {
    const { user, attendance, navigation } = this.props;
    const { openedBefore } = this.state;
    const { firstName } = user;
    const { navigate } = navigation;

    return (
      <Fragment>
        <Header
          title={`Welcome ${openedBefore ? 'back' : ''}, ${firstName}`} //TODO: REMOVE BACK OR ADD BACK
          ActionIcon={SettingsIcon}
          onActionIconPressed={() => navigate('Settings')}
        />
        <ScrollView
          style={{ flex: 1, alignSelf: 'stretch' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }}>
          <GetStartedCarousel
            entries={this.state.entries}
            activeSlide={this.state.activeSlide}
            setActiveSlide={index => this.setState({ activeSlide: index })}
            goToJobs={this.goToJobs}
          />

          <Text style={totalHoursStyle}>
            {attendance.totalHoursTrained}/160 Hours
          </Text>

          <Text style={totalAbsencesStyle}>{attendance.absences} Absences</Text>

          <TouchableOpacity
            style={preTripContainer}
            onPress={() => navigate('Category', { type: 1 })}>
            <Gauge style={preTripGauge} performance={this.getPerformance(1)} />
            <Text style={preTripTitleStyle}>Pre Trip</Text>
            <Text
              style={{
                ...preTripStatusStyle,
                color: this.generateColorFromResult(1)
              }}>
              {this.getPerformanceStatus(1)}
            </Text>

            <Text style={tapToPractice}>Tap to practice your pre trip</Text>
          </TouchableOpacity>

          <View style={roadSkillsContainer}>
            <TouchableOpacity
              style={roadContainer}
              onPress={() => navigate('Category', { type: 2 })}>
              <GradientView
                startPoint={{ x: 1, y: 0 }}
                endPoint={{ x: 0, y: 0 }}
                style={roadContainer}>
                <Gauge
                  style={{ ...preTripGauge, marginTop: 10 }}
                  performance={this.getPerformance(2)}
                />
                <Text style={roadSkillTitleStyle}>Road</Text>
                <Text style={roadSkillStatusStyle}>
                  {this.getPerformanceStatus(2)}
                </Text>
              </GradientView>
            </TouchableOpacity>

            <TouchableOpacity
              style={skillsContainer}
              onPress={() => navigate('Category', { type: 3 })}>
              <GradientView
                startPoint={{ x: 1, y: 0 }}
                endPoint={{ x: 0, y: 0 }}
                style={skillsContainer}>
                <Gauge
                  style={{ ...preTripGauge, marginTop: 0 }}
                  performance={this.getPerformance(3)}
                />
                <Text style={roadSkillTitleStyle}>Skills</Text>
                <Text style={roadSkillStatusStyle}>
                  {this.getPerformanceStatus(3)}
                </Text>
              </GradientView>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={generalKnowledgeButtonGradientStyle}
            onPress={() => navigate('Test')}>
            <GradientView
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 0 }}
              colors={GRADIENT_BLUE}
              style={{
                ...generalKnowledgeButtonGradientStyle,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0
              }}>
              <Text style={generalKnowledgeTextStyle}>General Knowledge</Text>
              <Text style={tapToTakePracticeTestTextStyle}>
                Tap to take a practice test
              </Text>
            </GradientView>
          </TouchableOpacity>
        </ScrollView>
      </Fragment>
    );
  }
}

function mapStateToProps({ dashboard, auth }) {
  return { ...dashboard, user: auth.user };
}

export default connect(mapStateToProps, DashboardActions)(Dashboard);
