import { storeLandingPagesData } from '_helpers/storage';
import { getLandingPagesData } from '_helpers/storage';

export const KEYS = {
  JOBS: 'jobs'
};

export const jobsLandingPages = [
  { key: 'welcome-jobs', seen: false },
  { key: 'jobs-form', seen: false },
  { key: 'good-job', seen: false },
  { key: 'your-inbox', seen: false }
];

export const getJobPage = async navigation => {
  const jobsLandingPagesData = await getLandingPagesData(
    KEYS.JOBS,
    jobsLandingPages
  );
  const nextLandingPageIndex = jobsLandingPagesData.findIndex(
    item => !item.seen
  );
  return nextLandingPageIndex;
};

export const updateJobPage = async index => {
  const jobsLandingPagesData = await getLandingPagesData(
    KEYS.JOBS,
    jobsLandingPages
  );

  const values = [...jobsLandingPagesData];
  values[index] = {
    ...values[index],
    seen: true
  };

  await storeLandingPagesData(KEYS.JOBS, values);
};
