import { object, string, ref, date, number } from 'yup';

function requiredGenerator(subject) {
  return `*${subject} is required`;
}

function pleaseGenerator(subject) {
  return `*Please enter a valid ${subject}`;
}

const initalSchema = object({
  firstName: string().required(requiredGenerator('First name')),
  lastName: string().required(requiredGenerator('Last name')),
  email: string().required(requiredGenerator('Email')),
  password: string()
    .required(requiredGenerator('Password'))
    .min(8, pleaseGenerator('password, at least 8 characters')),
  retypePassword: string()
    .oneOf([ref('password'), null], '*Passwords do not match')
    .required('*Passwords do not match')
});

const personal = object({
  birthdate: date().required(requiredGenerator('Date of birth')),
  address: object({
    country: string().required(requiredGenerator('Country')),
    state: string().required(requiredGenerator('State')),
    city: string().required(requiredGenerator('City')),
    street: string().required(requiredGenerator('Street'))
  })
});

const other = object({
  licenseId: string().required(requiredGenerator('Driver license')),
  yearsOfExperience: string().required('*Years of experience are required'),
  licenseState: string().required(requiredGenerator('Driver license state')),
  phone: string().required(requiredGenerator('Phone number')),
  cdlStatus: string().required(requiredGenerator('CDL Status')),
  jobStatus: string().required(requiredGenerator('Job Status'))
});

export default {
  1: initalSchema,
  2: personal,
  3: other
};
