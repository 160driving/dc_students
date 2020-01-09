import React, { Component } from 'react';
import { View } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { showMessage } from 'react-native-flash-message';
import { BoxShadow } from 'react-native-shadow';
import { connect } from 'react-redux';
import { Form } from 'form';

import JobActions from '_store/models/jobs';
import {
  transformUser,
  transformJobFilters,
  transformFormData
} from '_helpers/transform';
import { Header, Text } from '_components';
import { BLUE, GREY_TEXT } from '_constants/colors';
import {
  tabNavShadow,
  indicator,
  tabBarStyle,
  tabBarLabelStyle
} from './styles';
import { getJobPage, updateJobPage } from '_constants/landing-pages';
import { navigateTo, resetInsideStack } from '_helpers';

import Personal from './Tabs/Personal';
import CDL from './Tabs/CDL';
import Employment from './Tabs/Employment';
import Other from './Tabs/Other';

import { personal, cdl, other, employment } from './Schema';

const routes = [
  { key: 'Personal', title: 'Personal' },
  { key: 'CDL', title: 'CDL' },
  { key: 'Employment', title: 'Employment' },
  { key: 'Other', title: 'Other' }
];

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes,
      show: false
    };
  }

  checkIfHasGoBack() {
    const { navigation } = this.props;
    const state = navigation.state || {};
    const params = state.params || {};
    const { goBack } = params; //Pram taken if this screen is opened from settings.
    return !!goBack;
  }

  componentDidMount() {
    const goBack = this.checkIfHasGoBack();
    if (goBack) {
      this.addFiltersToForm();
      this.setState({ show: true });
    } else {
      this.goToLandings();
    }
  }

  addFiltersToForm() {
    const { getJobFilters } = this.props;
    getJobFilters(jobFilters => {
      const values = transformJobFilters(jobFilters.memberJobFilters);
      this.formApi.setFields(values);
    });
    this.setState({ show: true });
  }

  goToLandings = async () => {
    const { navigation, getJobFilters } = this.props;
    const nextLandingPageIndex = await getJobPage(navigation);
    switch (nextLandingPageIndex) {
      case 0:
        resetInsideStack(navigation, 'Welcome');
        break;
      case 1:
        this.addFiltersToForm();
        break;
      case 2:
        resetInsideStack(navigation, 'CardExplanation');
        break;
      case 3:
        resetInsideStack(navigation, 'InboxInfo');
        break;

      default:
        resetInsideStack(navigation, 'Swiper');

        break;
    }
  };

  renderTabBarLabel = ({ route, focused }) => {
    return (
      <Text
        style={
          [tabBarLabelStyle, { color: focused ? BLUE : GREY_TEXT }]
          //TODO: use rn responsive font size
        }>
        {route.title}
      </Text>
    );
  };

  handleIndexChange = index => this.setState({ index });

  renderTabBar = props => (
    <BoxShadow setting={tabNavShadow}>
      <TabBar
        {...props}
        renderLabel={this.renderTabBarLabel}
        indicatorStyle={indicator}
        style={tabBarStyle}
      />
    </BoxShadow>
  );

  merge(...schemas) {
    const [first, ...rest] = schemas;
    const merged = rest.reduce(
      (mergedSchemas, schema) => mergedSchemas.concat(schema),
      first
    );

    return merged;
  }

  onNextPressed = () => {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  };

  onSubmit = () => {
    const { updateMember, navigation } = this.props;
    const goBack = this.checkIfHasGoBack();
    if (this.formApi.validate()) {
      const dataToSend = transformFormData(this.formApi.values());
      updateMember(dataToSend, async () => {
        if (!goBack) {
          await updateJobPage(1);
          resetInsideStack(navigation, 'CardExplanation');
        }
      });
    } else {
      showMessage({
        message: 'Please fill all the fields correctly',
        type: 'warning'
      });
    }
  };

  render() {
    const { user, loadingUpdateMember, navigation } = this.props;
    const goBack = this.checkIfHasGoBack();
    const jobHistory = user.jobHistory || [];
    const formattedJobHistory = jobHistory.map(function formatJobHistory(
      jobHistory
    ) {
      const { startDate, endDate, ...rest } = jobHistory;
      return {
        dateRange: {
          startDate,
          endDate
        },
        ...rest
      };
    });

    const initialValues = {
      ...user,
      jobHistory: formattedJobHistory
    };

    if (!this.state.show) {
      return <View />;
    }

    return (
      <Form
        schema={this.merge(personal, cdl, employment, other)}
        initialValues={initialValues}
        formApi={api => (this.formApi = api)}>
        <Header
          title="Jobs"
          goBack={goBack}
          onBackPressed={() => {
            navigation.goBack();
          }}
        />
        <TabView
          navigationState={this.state}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
          goToLandings={this.goToLandings}
          swipeEnabled
          renderScene={({ route, jumpTo }) => {
            switch (route.key) {
              case 'Personal':
                return (
                  <Personal
                    jumpTo={jumpTo}
                    onNextPressed={this.onNextPressed}
                  />
                );
              case 'CDL':
                return (
                  <CDL jumpTo={jumpTo} onNextPressed={this.onNextPressed} />
                );
              case 'Employment':
                return (
                  <Employment
                    jumpTo={jumpTo}
                    onNextPressed={this.onNextPressed}
                  />
                );
              case 'Other':
                return (
                  <Other
                    jumpTo={jumpTo}
                    onFinishPressed={this.onSubmit}
                    loading={loadingUpdateMember}
                  />
                );
            }
          }}
        />
      </Form>
    );
  }
}

function mapStateToProps({ auth, jobs }) {
  return {
    user: transformUser(auth.user),
    jobFilters: transformJobFilters(jobs.jobFilters.memberJobFilters),
    loadingUpdateMember: jobs.loadingUpdateMember
  };
}

export default connect(mapStateToProps, JobActions)(Registration);
