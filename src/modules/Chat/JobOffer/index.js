import React, { Component } from 'react';
import { ScrollView, View, Text as Avenir } from 'react-native';
import { connect } from 'react-redux';

import JobsActions from '_store/models/jobs';
import { Header, Text, Button, JobSpecs, Image } from '_components';
import styles from './styles';

class JobOffer extends Component {
  getSpecs = () => {
    const { jobOffer } = this.props.navigation.state.params;
    const {
      minSalary,
      salaryType,
      minPerMile,
      startingBonus,
      relocationBonus,
      benefits
    } = jobOffer;

    const specs = [
      {
        title: 'Salary',
        value: minSalary && salaryType ? `$${minSalary} / ${salaryType}` : null
      },
      { title: 'CPM', value: minPerMile ? `$${minPerMile}` : null },
      {
        title: 'Starting Bouns',
        value: startingBonus ? `$${startingBonus}` : null
      },
      {
        title: 'Relocation Bonus',
        value: relocationBonus ? `$${relocationBonus}` : null
      },
      {
        title: 'Benefits',
        value: benefits && benefits.length > 0 ? benefits : null
      }
    ];

    return specs.filter(item => item.value);
  };

  render() {
    const { navigation, acceptJobOffer, declineJobOffer } = this.props;
    const { goBack, state } = navigation;
    const { onDecline } = navigation.state.params;

    const {
      id,
      companyName,
      message,
      logo,
      title = 'Over-the-Road (OTR) Truck Driver'
    } = state.params;

    const specs = this.getSpecs();

    return (
      <React.Fragment>
        <Header
          goBack={true}
          onBackPressed={() => {
            goBack();
          }}
          title="Job Offer"
          subTitle={companyName}
          // ActionIcon={Information}
          // onActionIconPressed={() => {}}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <Image imageName={logo} />
          <Avenir style={styles.jobTitle}>{title}</Avenir>
          <View style={styles.separator} />
          <Text style={styles.message}>{message}</Text>
          <JobSpecs specs={specs} />
          <Button
            onPress={() => {
              acceptJobOffer(id, navigation); //TODO: ask how .then here? or try passing the navigation
            }}
            style={styles.acceptBtn}
            textStyle={styles.acceptBtnText}
            text="Accept"
          />
          <Button
            onPress={() => {
              // declineJobOffser(id);
              declineJobOffer(id, navigation);
              onDecline();
            }}
            style={styles.declineBtn}
            textStyle={styles.declineBtnText}
            text="Decline" //TODO: WHAT ABOUT DECLINE
          />
        </ScrollView>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ jobs }) {
  return {
    loadingAcceptJobOffer: jobs.loadingAcceptJobOffer,
    loadingDeclineJobOffer: jobs.loadingDeclineJobOffer
  };
}

export default connect(
  mapStateToProps,
  (function extractJobActions() {
    const { acceptJobOffer, declineJobOffer } = JobsActions;
    return { acceptJobOffer, declineJobOffer };
  })()
)(JobOffer);
