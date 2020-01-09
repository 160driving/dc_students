import countries from '_constants/countries';
import states from '_constants/states';

const initial = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'email', label: 'Email' },
  { key: 'password', label: 'Password', secureTextEntry: true },
  {
    key: 'retypePassword',
    label: 'Confirm Password',
    secureTextEntry: true
  }
];

const personal = [
  { key: 'birthdate', label: 'Date of birth', type: 'date' },
  {
    key: 'address.country',
    label: 'Country',
    type: 'select',
    items: countries
  },
  { key: 'address.state', label: 'State', type: 'select', items: states },
  { key: 'address.city', label: 'City' },
  { key: 'address.street', label: 'Street' }
];

const other = [
  { key: 'licenseId', label: 'Driver license' },
  { key: 'yearsOfExperience', label: 'Years of experience' },
  {
    key: 'licenseState',
    label: 'Driver license state',
    type: 'select',
    items: states
  },
  { key: 'phone', label: 'Phone number' },
  {
    key: 'cdlStatus',
    label: 'CDL Status',
    type: 'select',
    items: [
      { label: 'Active', value: 'active' },
      { label: 'Expired', value: 'expired' },
      { label: 'No CDL', value: 'noCdl' },
      { label: 'Suspended', value: 'suspended' },
      { label: 'Revoked', value: 'revoked' }
    ]
  },
  {
    key: 'jobStatus',
    label: 'Job Status',
    type: 'select',
    items: [
      { label: 'Unemployed', value: 'unemployed' },
      { label: 'Employed - Part-time', value: 'partTime' },
      { label: 'Employed - Full-time', value: 'fullTime' },
      { label: 'Looking for my first job', value: 'lookingFirsst' },
      { label: 'Employed but have received notice', value: 'gaveNotice' }
    ]
  }
];

const getConfig = ({ country } = {}) => {
  const countryIsUs = country && country === 'US';

  return {
    1: initial,
    2: countryIsUs ? personal : personal.filter(({ key }) => key !== 'state'),
    3: other
  };
};

export default getConfig;
