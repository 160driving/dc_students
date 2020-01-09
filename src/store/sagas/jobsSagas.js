import { Alert, Vibration } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { put, call, select } from 'redux-saga/effects';

import {
  getJobsStackService,
  applyJobService,
  discardJobService,
  updateMemberService,
  getJobFiltersService,
  getApplicationsService,
  getLatestOfferService,
  acceptJobOfferService,
  declineJobOfferService
} from '_services/jobs';
import Firebase from '_services/firebase';
import JobsTypes from '../models/jobs';
import JobActions from '../models/jobs';
import AuthActions from '../models/auth';

export function* getJobsStack() {
  const response = yield call(getJobsStackService);
  const { success, data } = response || {};

  console.log('GET JOB STACK CALLED', response);

  if (success === 1) {
    yield put(JobsTypes.getJobsStackSuccess(data.stack.list));
  } else {
    yield put(JobActions.getJobsStackFailure());
  }
}

export function* applyForJob({ jobId, navigation }) {
  const memberId = yield select(state => state.auth.user.id);
  const firebaseId = yield call(Firebase.startChat, jobId, memberId);
  const response = yield call(applyJobService, jobId, firebaseId);
  console.log('applyForJob: ', response);
  const { success } = response || {};

  if (success === 1) {
    yield put(JobsTypes.applyForJobSuccess());
    navigation && navigation.pop();
  } else {
    yield put(JobsTypes.applyForJobFailure());
  }
}

export function* discardJob({ jobId }) {
  const response = yield call(discardJobService, jobId);
  const { success } = response || {};
  console.log('discardJob: ', response);

  if (success === 1) {
    yield put(JobsTypes.discardJobSuccess());
  } else {
    yield put(JobsTypes.discardJobFailure());
  }
}

export function* updateMember({ memberInfo, onSuccess }) {
  const response = yield call(updateMemberService, memberInfo);
  const user = yield select(state => state.auth.user);
  const { success } = response || {};

  if (success === 1) {
    yield put(JobActions.updateMemberSuccess());
    yield put(AuthActions.updateUser({ ...user, ...memberInfo, id: user.id }));
    showMessage({
      message: 'Profile successfully updated',
      type: 'success'
    });
    onSuccess();
  } else {
    yield put(JobActions.updateMemberFailure());
    Alert.alert('Failed to update your information', 'Please try again');
  }
}

export function* getJobFilters({ onSuccess }) {
  const response = yield call(getJobFiltersService);
  const { success, data } = response || {};
  if (success === 1) {
    yield put(JobActions.getJobFiltersSuccess(data));
    onSuccess(data);
  } else {
    yield put(JobActions.getJobFiltersFailure());
    Alert.alert(
      'Failed to retrieve your saved information',
      'Please try again'
    );
  }
}

export function* getJobApplications() {
  const response = yield call(getApplicationsService);
  const { success, data } = response || {};
  console.log('getJobApplications: ', response);
  if (success === 1) {
    yield put(JobActions.getJobApplicationsSuccess(data.applications));
  } else {
    yield put(JobActions.getJobApplicationsFailure());
  }
}

export function* getLatestJobOffer({ applicationId, company = true }) {
  const response = yield call(getLatestOfferService, applicationId, company);
  const { success, data } = response || {};
  if (success === 1 && data.offer && data.offer.length > 0) {
    yield put(JobActions.getLatestOfferSuccess(data.offer[0]));
    Vibration.vibrate([200, 300, 400]);
  } else {
    yield put(JobActions.getLatestOfferFailure());
  }
}

export function* acceptJobOffer({ offerId, navigation = null }) {
  const response = yield call(acceptJobOfferService, offerId);
  const { success, data } = response || {};
  if (success === 1) {
    navigation && navigation.goBack();
    showMessage({
      message: 'You accepted the job offer',
      type: 'success'
    });
    yield put(JobActions.acceptJobOfferSuccess());
    yield call(getJobApplications);
  } else {
    yield put(JobActions.acceptJobOfferFailure());
    showMessage({
      message: 'Failed to accept the job offer',
      type: 'danger'
    });
  }
}

export function* declineJobOffer({ offerId, navigation = null }) {
  const response = yield call(declineJobOfferService, offerId);
  const { success, data } = response || {};
  if (success === 1) {
    console.log('SUCCESSFULLY DECLINED');
    yield put(JobActions.declineJobOfferSuccess());
    navigation && navigation.goBack();
    showMessage({
      message: 'You declined the job offer',
      type: 'info'
    });
    yield call(getJobApplications);
  } else {
    yield put(JobActions.declineJobOfferFailure());
    showMessage({
      message: 'Failed to decline the job offer',
      type: 'danger'
    });
  }
}
