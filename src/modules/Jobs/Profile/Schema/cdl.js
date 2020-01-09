import { object, string, array, date } from 'yup';

function requiredGenerator(subject) {
  return `*${subject} is required`;
}

function pleaseGenerator(subject) {
  return `*Please enter a valid ${subject}`;
}

export default object({
  licenseId: string()
    .required(requiredGenerator('CDL number'))
    .min(4, pleaseGenerator('cdl number'))
    .trim(),
  licenseState: string().required(requiredGenerator('CDL State')),
  cdlStatus: string().required(requiredGenerator('CDL Status')),
  jobStatus: string().required(requiredGenerator('Job Status')),
  cdlClass: string().required(requiredGenerator('CDL Class')),
  endorsements: array().required(requiredGenerator('At least one endorsement')),
  restrictions: array().nullable(),
  trafficIncidents: array().of(
    object().shape({
      description: string()
        .required(requiredGenerator('Incident description'))
        .min(30, '*Description should be more than 30 characters')
        .max(1000, '*Description should be less than 1000 characters'),
      involvedProperty: string().nullable(),
      state: string().required(requiredGenerator('State')),
      date: date().required(requiredGenerator('Date'))
    })
  )
});
