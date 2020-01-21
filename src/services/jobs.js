import base from './base';

export const getJobsStackService = () =>
  base.get('jobs_stack').catch(err => {});

export const applyJobService = (jobId, firebaseId) =>
  base.post('apply_for_job', { jobId, firebaseId }).catch(err => {});

export const discardJobService = jobId =>
  base.post('discard_job', { jobId }).catch(err => {});

export const updateMemberService = memberInfo =>
  base.patch('update', memberInfo).catch(err => {});

export const getJobFiltersService = () =>
  base.get('get_job_filters').catch(err => {});

export const getApplicationsService = () =>
  base.get('member_applications').catch(err => {});

export const getLatestOfferService = (applicationId, company) =>
  base.get('get_latest_offer', { applicationId, company }).catch(err => {});

export const acceptJobOfferService = (offerId, status = 'ACCEPTED') =>
  base.patch(`accept_job_offer/${offerId}`, { status }).catch(err => {});

export const declineJobOfferService = (offerId, status = 'REJECTED') =>
  base.patch(`decline_job_offer/${offerId}`, { status }).catch(err => {});
