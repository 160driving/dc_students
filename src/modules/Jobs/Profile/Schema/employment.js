import Yup, { object, array, string, date } from 'yup';

function requiredGenerator(subject) {
  return `*${subject} is required`;
}

function pleaseGenerator(subject) {
  return `*Please enter a valid ${subject}`;
}

export default object({
  jobHistory: array().of(
    object().shape({
      description: string()
        .required(requiredGenerator('Job description'))
        .min(30, '*Description should be more than 30 characters')
        .max(1000, '*Description should be less than 1000 characters'),
      dateRange: object().shape({
        endDate: string().required(requiredGenerator('End date')),
        startDate: string().required(requiredGenerator('Start date'))
      }),
      position: string().required(requiredGenerator('Position')),
      employer: string().required(requiredGenerator('Employer'))
    })
  )
});
