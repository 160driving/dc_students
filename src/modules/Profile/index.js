import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { getPath, setPath, clone, uniq, stripNullObj } from 'utils';

import { Input, Datepicker, Select, GradientButton } from '_components';
import AuthActions from '_store/models/auth';
import schemas from './schema';

import { nextButton, nextButtonContainer } from './styles';
import Background from './Background';
import getConfig from './config';

class Profile extends Component {
  constructor(props) {
    super(props);
    const { user } = props;

    const allowedFields = uniq(
      Object.values(getConfig())
        .flat(2)
        .map(({ key }) => key.split('.')[0])
    );

    const allowedValues = allowedFields.reduce(
      (acc, field) => ({ ...acc, [field]: user[field] }),
      {}
    );
    const { birthdate, ...rest } = allowedValues;

    this.state = {
      page: 1,
      errors: {},
      ...rest,
      birthdate: birthdate ? moment(birthdate).format('MM/DD/YYYY') : ''
    };
  }

  goNext = () => {
    const { navigation, updateProfile } = this.props;
    let { page, errors, ...data } = this.state;
    data = stripNullObj(data);
    schemas[page]
      .validate(data, { abortEarly: false })
      .then(() => {
        if (page === 3) {
          const { retypePassword, ...dataToSend } = data;
          updateProfile(dataToSend, navigation);
        } else {
          this.setState({ page: page + 1 });
        }
      })
      .catch(e => {
        const errors = e.inner.reduce((acc, { message, path }) => {
          let error = message;
          let errorKey = path;

          return { ...acc, [errorKey]: error };
        }, {});

        this.setState({ errors });
      });
  };

  getFieldComponent = type => {
    switch (type) {
      case 'date':
        return Datepicker;
      case 'select':
        return Select;
      default:
        return Input;
    }
  };

  getFieldValue = key => {
    return getPath(this.state, key);
  };

  setFieldValue = (key, value) => {
    const state = clone(this.state);
    setPath(state, key, value);

    this.setState({ ...state });
  };

  renderField = ({ key, type, label, ...rest }) => {
    const { errors } = this.state;
    const Component = this.getFieldComponent(type);

    return (
      <Component
        {...rest}
        key={key}
        error={errors[key]}
        style={{ container: { marginTop: 16 } }}
        placeholder={label}
        value={this.getFieldValue(key)}
        onChange={value => this.setFieldValue(key, value)}
      />
    );
  };

  render() {
    const { page } = this.state;
    const fields = getConfig(this.state)[page];

    return (
      <Background
        showBackButton={page !== 1}
        onBackPressed={() => this.setState({ page: page - 1 })}>
        <View style={{ width: '100%', paddingHorizontal: 30 }}>
          {fields.map(this.renderField)}
        </View>

        <View style={nextButtonContainer}>
          <GradientButton
            style={nextButton}
            text={page === 3 ? 'Submit' : 'Next'}
            onPress={this.goNext}
          />
        </View>
      </Background>
    );
  }
}

function mapStateToProps({ auth }) {
  return { user: auth.user };
}

export default connect(mapStateToProps, AuthActions)(Profile);
