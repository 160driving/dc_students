import { object, string, array, number } from 'yup';

export default object({
  miles: number(),
  coordinates: object().required(
    '*Please select one of the suggested locations*'
  ),
  jobType: array().required('*Select at least one job type'),
  employmentType: array().required('*Select at least one employment form'),
  minSalary: number().nullable(),
  minPerMile: number().nullable()
});
