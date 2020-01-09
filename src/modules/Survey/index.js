import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';

import { Header, GradientButton } from '_components';
import { Checkbox, Input } from './components';

import { secondWeek } from './questions';

const questions = secondWeek; //TODO: alternate this based on notifications
const initial = questions.reduce((acc, { id }) => ({ ...acc, [id]: '' }), {});

class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderInput = (id, question, value, onChange) => (
    <Input
      key={id}
      question={question}
      value={value}
      name={id}
      inputNo={id + 1}
      onChange={onChange}
    />
  );

  renderCheckBox = (id, question, options, onSelect) => (
    <Checkbox
      key={id}
      name={id}
      question={question}
      options={options}
      onSelect={onSelect}
      inputNo={id + 1}
    />
  );

  renderSurvey = () => {
    return (
      <View style={{ paddingTop: 30 }}>
        <Formik
          initialValues={initial}
          onSubmit={values => alert(JSON.stringify(values, null, 2))}
          render={({ values, handleSubmit, handleChange }) => (
            <React.Fragment>
              {questions.map(({ id, question, options }) => {
                return options
                  ? this.renderCheckBox(
                      id,
                      question,
                      options,
                      (onSelect = handleChange(`${id}`))
                    )
                  : this.renderInput(
                      id,
                      question,
                      (value = values[id]),
                      (onChange = handleChange(`${id}`))
                    );
              })}
              <GradientButton
                containerStyle={{ alignSelf: 'center' }}
                text="Submit"
                onPress={handleSubmit}
              />
            </React.Fragment>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <Fragment>
        <KeyboardAwareScrollView>
          <Header title="Beginner's survey" />
          {this.renderSurvey()}
        </KeyboardAwareScrollView>
      </Fragment>
    );
  }
}

export default Survey;
