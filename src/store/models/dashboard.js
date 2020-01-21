import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  getAttendanceInfo: [],
  attendanceInfoSuccess: ['attendance', 'performance'],
  attendanceInfoFailed: [],

  getCategoryInfo: ['testType'],
  categoryInfoSuccess: ['categories'],
  categoryInfoFailed: []
});

export const DashboardTypes = Types;

const INITIAL_STATE = {
  attendance: {},
  performance: {},
  categories: [],
  loadingAttendanceInfo: false,
  loadingCategory: false
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ATTENDANCE_INFO]: state => ({
    ...state,
    loadingAttendanceInfo: true
  }),
  [Types.ATTENDANCE_INFO_SUCCESS]: (state, { attendance, performance }) => ({
    ...state,
    attendance,
    performance,
    loadingAttendanceInfo: false
  }),
  [Types.ATTENDANCE_INFO_FAILED]: state => ({
    ...state,
    loadingAttendanceInfo: false
  }),

  [Types.GET_CATEGORY_INFO]: state => ({ ...state, loadingCategory: true }),
  [Types.CATEGORY_INFO_SUCCESS]: (state, { categories }) => ({
    ...state,
    categories,
    loadingCategory: false
  }),
  [Types.CATEGORY_INFO_FAILED]: state => ({
    ...state,
    loadingCategory: false
  })
});

export default Creators;
