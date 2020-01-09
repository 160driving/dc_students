import { takeLatest, all, takeEvery } from 'redux-saga/effects';

import { AuthTypes } from '../models/auth';
import { DashboardTypes } from '../models/dashboard';
import { JobsTypes } from '../models/jobs';

import { logIn, logInQr, changePassword, updateProfile } from './authSagas';
import { getAttendanceInfo, getCategoryInfo } from './dashboardSagas';
import {
  getJobsStack,
  applyForJob,
  discardJob,
  getJobFilters,
  updateMember,
  getJobApplications,
  getLatestJobOffer,
  acceptJobOffer,
  declineJobOffer
} from './jobsSagas';

export default function* root() {
  yield all([
    //AUTH
    takeLatest(AuthTypes.LOG_IN, logIn),
    takeLatest(AuthTypes.LOG_IN_QR, logInQr),
    takeLatest(AuthTypes.CHANGE_PASSWORD, changePassword),
    takeLatest(AuthTypes.UPDATE_PROFILE, updateProfile),

    //DASHBOARD
    takeLatest(DashboardTypes.GET_ATTENDANCE_INFO, getAttendanceInfo),
    takeLatest(DashboardTypes.GET_CATEGORY_INFO, getCategoryInfo),

    //JOBS
    takeLatest(JobsTypes.GET_JOBS_STACK, getJobsStack),
    takeEvery(JobsTypes.APPLY_FOR_JOB, applyForJob),
    takeEvery(JobsTypes.DISCARD_JOB, discardJob),
    takeLatest(JobsTypes.GET_JOB_FILTERS, getJobFilters),
    takeLatest(JobsTypes.UPDATE_MEMBER, updateMember),
    takeLatest(JobsTypes.GET_JOB_APPLICATIONS, getJobApplications),
    takeLatest(JobsTypes.GET_LATEST_OFFER, getLatestJobOffer),
    takeLatest(JobsTypes.ACCEPT_JOB_OFFER, acceptJobOffer),
    takeLatest(JobsTypes.DECLINE_JOB_OFFER, declineJobOffer)
  ]);
}
