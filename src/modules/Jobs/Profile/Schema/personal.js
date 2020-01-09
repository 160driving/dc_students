import { object, string, date } from 'yup';

function requiredGenerator(subject) {
  return `*${subject} is required`;
}

function pleaseGenerator(subject) {
  return `*Please enter a valid ${subject}`;
}

export default object({
  firstName: string()
    .required(requiredGenerator('First name'))
    .min(2, pleaseGenerator('first name'))
    .matches(/^[a-zA-Z]*$/, pleaseGenerator('first name'))
    .trim(),
  lastName: string()
    .required(requiredGenerator('Last name'))
    .min(2, pleaseGenerator('last name'))
    .matches(/^[a-zA-Z]*$/, pleaseGenerator('last name'))
    .trim(),
  email: string()
    .required(requiredGenerator('E-mail'))
    .email(pleaseGenerator('e-mail'))
    .trim(),
  birthdate: date()
    .min(
      new Date('January 1, 1930'),
      '*Please select a date greater than Jan, 1, 1930'
    )
    .max('January 1, 2005', '*Please select a date lower than Jan, 1, 2005'),
  street: string()
    .required(requiredGenerator('Street Address 1'))
    .min(6, pleaseGenerator('street address'))
    .trim(),
  street2: string().nullable(),
  city: string().required(requiredGenerator('City')),
  state: string().required(requiredGenerator('State')),
  phone: string()
    .required(requiredGenerator('Phone number'))
    .min('4', pleaseGenerator('phone number'))
    .max('20', pleaseGenerator('phone number'))
    .trim(),
  zip: string().required(requiredGenerator('Zip'))
});
