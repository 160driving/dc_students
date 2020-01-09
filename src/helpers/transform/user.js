import moment from 'moment';

export function transformUser(member = {}) {
  const {
    firstName,
    lastName,
    email,
    birthdate = '',
    address,
    phone,
    licenseState,
    jobStatus,
    cdlClass,
    cdlStatus,
    licenseId,
    endorsements,
    restrictions,
    trafficIncidents,
    jobHistory
  } = member;

  const { city, state, street, street2, zip } = address || {};

  const transformedUser = {
    firstName,
    lastName,
    email,
    birthdate: moment(birthdate).format('MM/DD/YY'),
    phone,
    city,
    state,
    street,
    street2,
    zip,
    cdlStatus,
    cdlClass,
    licenseState,
    jobStatus,
    licenseId,
    endorsements,
    restrictions,
    trafficIncidents,
    jobHistory
  };

  return transformedUser;
}
