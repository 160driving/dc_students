import { put, call } from 'redux-saga/effects';

import {
  attendanceInfoService,
  categoryInfoService
} from '_services/dashboard';
import allCategories from '_constants/categories';
import DashboardTypes from '../models/dashboard';

export function* getAttendanceInfo() {
  const response = yield call(attendanceInfoService);
  const { success, data } = response || {};

  if (success === 1) {
    const { studentCard } = data;
    const { studentPerfomance, reportCard } = studentCard;
    const { totalHoursTrained = 0, absences = 0 } = reportCard;
    const attendance = { totalHoursTrained, absences };

    yield put(
      DashboardTypes.attendanceInfoSuccess(attendance, studentPerfomance)
    );
  } else {
    yield put(DashboardTypes.attendanceInfoFailed());
  }
}

export function* getCategoryInfo({ testType }) {
  const response = yield call(categoryInfoService);
  const { success, data } = response || {};

  if (success === 1) {
    const performanceToIndex = {
      UNSUCCESFUL: 0,
      'NEEDS IMPROVEMENT': 1,
      SATISFACTORY: 2,
      PROFICIENT: 3
    };

    const questions = data.response
      .filter(
        ({ type, performanceStatus }) =>
          type === testType && !!performanceStatus
      )
      .map(({ id, sectionType, lastPerformance }) => ({
        id,
        sectionType,
        performance: performanceToIndex[lastPerformance],
        lastPerformance
      }));

    const grouped = questions.reduce((acc, question) => {
      const { sectionType } = question;
      const current = acc[sectionType] || [];

      return { ...acc, [sectionType]: [...current, question] };
    }, {});

    const categories = allCategories[testType].map(({ id, label }) => {
      const categoryQuestions = grouped[id] || [];
      let performance = categoryQuestions.reduce(
        (acc, { performance }) => acc + performance,
        0
      );

      performance = categoryQuestions.length
        ? Math.round(performance / categoryQuestions.length)
        : -1;

      return { id, label, performance };
    });
    yield put(DashboardTypes.categoryInfoSuccess(categories));
  } else {
    yield put(DashboardTypes.categoryInfoFailed());
  }
}
