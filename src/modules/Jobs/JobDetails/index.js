import React, { Component, Fragment } from 'react';
import { View, ScrollView, Text as Avenir } from 'react-native';
import { connect } from 'react-redux';

import JobsActions from '_store/models/jobs';
import { Header, Text, GradientButton, JobSpecs, Image } from '_components';
import { E, H, L, M, N, N_R, P, S, T, V, X, Z } from '_assets/img';
import { GRADIENT_BLUE } from '_constants/colors';
import styles from './styles';
import { employmentTypes, jobTypes } from '../values';

class JobDetails extends Component {
  endResMapper = {
    H,
    N,
    P,
    S,
    T,
    X,
    E,
    L,
    M,
    N_R,
    V,
    Z
  };

  componentDidUpdate(lastProps) {
    if (lastProps.loadingApplyJob && !this.props.loadingApplyJob) {
      this.props.navigation.pop();
    }
  }

  getSpecs = () => {
    const { selectedJob } = this.props;
    const {
      minSalary,
      salaryType,
      minPerMile,
      startingBonus,
      relocationBonus,
      benefits
    } = selectedJob;

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

  apply = () => {
    const { navigation, selectedJob } = this.props;
    const { applyForJob } = navigation.state.params;

    applyForJob(selectedJob.id);
  };

  renderEndRes = endRes => (
    <View style={styles.lettersContainer}>
      {endRes.map(
        (renderLetter = key => {
          const Letter = this.endResMapper[key];
          return <Letter key={key} style={{ marginRight: 9 }} />;
        })
      )}
    </View>
  );

  render() {
    const { navigation, selectedJob, loadingApplyJob } = this.props;
    console.log('selectedJob: ', selectedJob);
    const {
      logo = '',
      title = '',
      city = '',
      state = '',
      employmentType = '',
      jobType = '',
      description = '',
      endorsements = [],
      restriction = []
    } = selectedJob;

    const specs = this.getSpecs();

    return (
      <Fragment>
        <Header
          title="Over the Road (OTR) Truck Dr.."
          goBack={true}
          onBackPressed={() => {
            navigation.goBack();
          }}
        />

        <ScrollView contentContainerStyle={styles.container}>
          <Image imageName={logo} />

          <Text style={styles.title}>{title}</Text>

          <Text style={styles.location}>
            {city}, {state}
          </Text>

          <Text style={styles.employment}>
            {employmentTypes[employmentType]}
          </Text>

          <Text style={styles.employmentDetails}>{jobTypes[jobType]}</Text>

          <Text style={styles.sectionTitle}>Job Description</Text>

          <Avenir style={styles.jobDescription}>{description}</Avenir>

          <JobSpecs specs={specs} />

          {/*           <Text style={styles.sectionTitle}>
            Eligible CDL Truck Driver Applicants:
          </Text>
          <Text style={styles.cdlTruckDricerApplicants}>
            {cdlTruckDricerApplicants}
          </Text> */}

          {endorsements && (
            <React.Fragment>
              <Text style={styles.sectionTitle}>Endorsements</Text>
              {this.renderEndRes(endorsements)}
            </React.Fragment>
          )}

          {restriction && (
            <React.Fragment>
              <Text style={styles.sectionTitle}>Restrictions</Text>
              {this.renderEndRes(restriction)}
            </React.Fragment>
          )}

          <View style={styles.buttonContainer}>
            <GradientButton
              onPress={this.apply}
              colors={GRADIENT_BLUE}
              style={styles.button}
              textStyle={styles.buttonText}
              loading={loadingApplyJob}
              text="Apply"
            />
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

function mapStateToProps({ jobs }) {
  return {
    selectedJob: jobs.selectedJob,
    loadingApplyJob: jobs.loadingApplyJob
  };
}

export default connect(mapStateToProps, JobsActions)(JobDetails);
