import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  updateMember: ['memberInfo', 'onSuccess'],
  updateMemberSuccess: [],
  updateMemberFailure: [],

  getJobFilters: ['onSuccess'],
  getJobFiltersSuccess: ['jobFilters'],
  getJobFiltersFailure: [],

  getJobsStack: [],
  getJobsStackSuccess: ['jobsStack'],
  getJobsStackFailure: [],

  applyForJob: ['jobId', 'navigation'],
  applyForJobSuccess: [],
  applyForJobFailure: [],

  discardJob: ['jobId'],
  discardJobSuccess: [],
  discardJobFailure: [],

  getJobApplications: [],
  getJobApplicationsSuccess: ['applications'],
  getJobApplicationsFailure: [],

  updateSelectedJob: ['selectedJob'],

  getLatestOffer: ['applicationId', 'company'],
  getLatestOfferSuccess: ['jobOffer'],
  getLatestOfferFailure: [],
  resetLatestOffer: [],

  acceptJobOffer: ['offerId', 'navigation'],
  acceptJobOfferSuccess: [],
  acceptJobOfferFailure: [],

  declineJobOffer: ['offerId', 'navigation'],
  declineJobOfferSuccess: [],
  declineJobOfferFailure: []
});

export const JobsTypes = Types;

const INITIAL_STATE = {
  jobsStack: [],
  selectedJob: null,
  loadingJobsStack: false,
  loadingApplyJob: false,
  loadingDiscardJob: false,
  memberInfo: {},
  jobFilters: {},
  loadingUpdateMember: false,
  loadingJobFilters: false,

  applications: [],
  loadingApplications: [],

  jobOffer: {},
  loadingGetJobOffer: false,
  jobOfferModalOpen: false,
  loadingAcceptJobOffer: false,
  loadingDeclineJobOffer: false
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_MEMBER]: state => ({ ...state, loadingUpdateMember: true }),
  [Types.UPDATE_MEMBER_SUCCESS]: (state, { memberInfo }) => ({
    ...state,
    memberInfo,
    loadingUpdateMember: false
  }),
  [Types.UPDATE_MEMBER_FAILURE]: state => ({
    ...state,
    loadingUpdateMember: false
  }),
  [Types.GET_JOB_FILTERS]: state => ({ ...state, loadingJobFilters: true }),
  [Types.GET_JOB_FILTERS_SUCCESS]: (state, { jobFilters }) => ({
    ...state,
    jobFilters,
    loadingJobFilters: false
  }),
  [Types.GET_JOB_FILTERS_FAILURE]: state => ({
    ...state,
    loadingJobFilters: false
  }),
  [Types.GET_JOBS_STACK]: state => ({ ...state, loadingJobsStack: true }),
  [Types.GET_JOBS_STACK_SUCCESS]: (state, { jobsStack }) => ({
    ...state,
    jobsStack,
    loadingJobsStack: false
  }),
  [Types.GET_JOBS_STACK_FAILURE]: state => ({
    ...state,
    loadingJobsStack: false
  }),

  [Types.APPLY_FOR_JOB]: state => ({ ...state, loadingApplyJob: true }),
  [Types.APPLY_FOR_JOB_SUCCESS]: state => ({
    ...state,
    loadingApplyJob: false
  }),
  [Types.APPLY_FOR_JOB_FAILURE]: state => ({
    ...state,
    loadingApplyJob: false
  }),

  [Types.DISCARD_JOB]: state => ({ ...state, loadingDiscardJob: true }),
  [Types.DISCARD_JOB_SUCCESS]: state => ({
    ...state,
    loadingDiscardJob: false
  }),
  [Types.DISCARD_JOB_FAILURE]: state => ({
    ...state,
    loadingDiscardJob: false
  }),

  [Types.GET_JOB_APPLICATIONS]: state => ({
    ...state,
    loadingApplications: true
  }),
  [Types.GET_JOB_APPLICATIONS_SUCCESS]: (state, { applications }) => ({
    ...state,
    applications,
    loadingApplications: false
  }),
  [Types.GET_JOB_APPLICATIONS_FAILURE]: state => ({
    ...state,
    loadingApplications: false
  }),

  [Types.UPDATE_SELECTED_JOB]: (state, { selectedJob }) => ({
    ...state,
    selectedJob,
    loadingGetJobOffer: false,
    jobOfferModalOpen: false
  }),

  [Types.GET_LATEST_OFFER]: state => ({ ...state, loadingGetJobOffer: true }),
  [Types.GET_LATEST_OFFER_SUCCESS]: (state, { jobOffer }) => ({
    ...state,
    jobOffer,
    loadingGetJobOffer: false,
    jobOfferModalOpen: true
  }),
  [Types.GET_LATEST_OFFER_FAILURE]: state => ({
    ...state,
    loadingGetJobOffer: false,
    jobOfferModalOpen: false
  }),
  [Types.RESET_LATEST_OFFER]: state => ({
    ...state,
    loadingGetJobOffer: false,
    jobOfferModalOpen: false
  }),

  [Types.ACCEPT_JOB_OFFER]: state => ({
    ...state,
    loadingAcceptJobOffer: true
  }),
  [Types.ACCEPT_JOB_OFFER_SUCCESS]: state => ({
    ...state,
    jobOfferModalOpen: false,
    loadingAcceptJobOffer: false
  }),
  [Types.ACCEPT_JOB_OFFER_FAILURE]: state => ({
    ...state,
    loadingAcceptJobOffer: false
  }),

  [Types.DECLINE_JOB_OFFER]: state => ({
    ...state,
    loadingDeclineJobOffer: true
  }),
  [Types.DECLINE_JOB_OFFER_SUCCESS]: state => ({
    ...state,
    jobOfferModalOpen: false,
    loadingDeclineJobOffer: false
  }),
  [Types.DECLINE_JOB_OFFER_FAILURE]: state => ({
    ...state,
    loadingDeclineJobOffer: false
  })
});

export default Creators;
