import React, { Component, Fragment } from 'react';
import { View, ScrollView } from 'react-native';

import {
  Text,
  Button,
  GradientButton,
  GradientView,
  Header
} from '_components';

import {
  WHITE,
  GREY_TEXT,
  RED,
  GREEN,
  GRADIENT_GREEN,
  GRADIENT_RED,
  BLACK
} from '_constants/colors';
import {
  ovalHeader,
  questionNumberText,
  questionText,
  optionButtonStyle,
  optionButtonTextStyle,
  nextButtonStyle,
  temporaryHackCoverView,
  scrollViewOuterContainer
} from './styles';
import questions from './questions';

class Test extends Component {
  constructor(props) {
    super(props);
    const currentQuestionsSet = questions[0].questions
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    this.state = {
      selected: false,
      correct: false,
      selectedOptionKey: null,
      correctOptionKey: currentQuestionsSet[0].answers.find(
        ({ correct }) => correct === true
      ).key,
      questions: currentQuestionsSet,
      currentQuestion: currentQuestionsSet[0],
      currentQuestionNumber: 0,
      guessedRight: 0,
      guessedWrong: 0,
      nextButtonTitle: 'Next'
    };
  }

  getTextColorForText = () => {
    const { selected } = this.state;
    return selected ? WHITE : GREY_TEXT;
  };

  getColorForHeaderAndNextButton = () => {
    const { selected, correct } = this.state;
    if (!selected) return null;
    return correct ? GRADIENT_GREEN : GRADIENT_RED;
  };

  getTextColorForOptions = key => {
    const {
      selected,
      selectedOptionKey,
      correct,
      correctOptionKey
    } = this.state;
    if (!selected) {
      return GREY_TEXT;
    } else {
      if (selectedOptionKey === key) {
        return correct ? WHITE : RED;
      } else {
        if (key === correctOptionKey) {
          return WHITE;
        }
        return GREY_TEXT;
      }
    }
  };

  getBackgroundColorForOptions = key => {
    const { selected, correctOptionKey } = this.state;
    if (!selected) return WHITE;
    if (key === correctOptionKey) {
      return GRADIENT_GREEN;
    }
  };

  renderOvalTitleBackground = () => {
    const { selected, correct } = this.state;
    var shadowColor = '#000';
    var backgroundColor = '#fff';
    var gradient = GRADIENT_GREEN;
    if (!selected) {
      return <View style={{ ...ovalHeader, shadowColor, backgroundColor }} />;
    } else {
      if (!correct) {
        shadowColor = RED;
        gradient = GRADIENT_RED;
      } else {
        shadowColor = GREEN;
        gradient = GRADIENT_GREEN;
      }
      return (
        <GradientView
          colors={gradient}
          style={{ ...ovalHeader, shadowColor }}
        />
      );
    }
  };

  renderQuestionHeader = (
    questionNumber = 0,
    question = ' Example text goes here aksdklasdlka asdaskdasdasd'
  ) => {
    const textColor = this.getTextColorForText();
    return (
      <React.Fragment>
        <Text style={{ ...questionNumberText, color: textColor }}>
          Question {++questionNumber}:
        </Text>
        <Text style={{ ...questionText, color: textColor }}>{question}</Text>
      </React.Fragment>
    );
  };

  renderOptionButton = (text, correct, key) => {
    const shadowColor =
      this.getTextColorForOptions(key) === RED ? '#F95661' : BLACK;
    const shadowOpacity = this.getTextColorForOptions(key) === RED ? 0.2 : 0.1;
    const textColor = this.getTextColorForOptions(key);
    const { selected, guessedWrong, guessedRight } = this.state;
    return (
      <Button
        disabled={selected}
        key={key}
        style={{ ...optionButtonStyle, shadowColor, shadowOpacity }}
        onPress={() => {
          this.setState({
            selected: true,
            selectedOptionKey: key,
            correct: correct,
            guessedRight: correct ? guessedRight + 1 : guessedRight,
            guessedWrong: correct ? guessedWrong : guessedWrong + 1
          });
        }}
        textStyle={{ ...optionButtonTextStyle, color: textColor }}
        text={text}
      />
    );
  };

  renderGradientButton = (text, key) => {
    const textColor = this.getTextColorForOptions(key);
    return (
      <GradientView
        key={key}
        style={optionButtonStyle}
        colors={this.getBackgroundColorForOptions(key)}>
        <Text
          numberOfLines={2}
          style={{ ...optionButtonTextStyle, color: textColor }}>
          {text}
        </Text>
      </GradientView>
    );
  };

  renderOptions = options => {
    const { selected, correctOptionKey } = this.state;
    return (
      <View>
        {options.map(({ text, correct, key }) => {
          return selected && correctOptionKey === key
            ? this.renderGradientButton(text, key)
            : this.renderOptionButton(text, correct, key);
        })}
      </View>
    );
  };

  renderFooter = () => {
    const {
      selected,
      currentQuestionNumber,
      questions,
      nextButtonTitle,
      guessedRight,
      guessedWrong
    } = this.state;
    if (!selected) {
      return null;
    }
    return (
      <GradientButton
        colors={this.getColorForHeaderAndNextButton()}
        text={nextButtonTitle}
        style={nextButtonStyle}
        textStyle={{ fontSize: 23, textAlign: 'center' }}
        onPress={() => {
          if (nextButtonTitle === 'Results') {
            const result = Math.round(
              (guessedRight / (guessedRight + guessedWrong)) * 100
            );
            this.props.navigation.navigate('Result', { result });
            return;
          }
          this.setState({
            selected: false,
            currentQuestionNumber: currentQuestionNumber + 1,
            currentQuestion: questions[currentQuestionNumber + 1],
            correctOptionKey: questions[currentQuestionNumber + 1].answers.find(
              ({ correct }) => correct === true
            ).key,
            nextButtonTitle:
              currentQuestionNumber + 1 === questions.length - 1
                ? 'Results'
                : 'Next'
          });
        }}
      />
    );
  };

  render() {
    return (
      <Fragment>
        {this.renderOvalTitleBackground()}
        {Platform.OS === 'ios' && <View style={temporaryHackCoverView} />}
        <Header
          title="General Knowledge"
          goBack={true}
          style={{ zIndex: 4, elevation: 2 }}
          onBackPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        {this.renderQuestionHeader(
          this.state.currentQuestionNumber,
          this.state.currentQuestion.question
        )}
        <View style={scrollViewOuterContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              zIndex: -1
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              paddingBottom: 30,
              paddingTop: 130
            }}>
            {this.renderOptions(this.state.currentQuestion.answers)}
          </ScrollView>
          {this.renderFooter()}
        </View>
      </Fragment>
    );
  }
}

export default Test;
