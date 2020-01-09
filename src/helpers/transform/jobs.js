export function transformJobFilters(jobFilters = {}) {
  const {
    salaryType,
    updatedAt,
    createdAt,
    memberId,
    jobType = '[]',
    employmentType = '[]',
    ...dataToSend
  } = jobFilters;

  return {
    jobType: Array.isArray(jobType) ? jobType : JSON.parse(jobType),
    employmentType: Array.isArray(employmentType)
      ? employmentType
      : JSON.parse(employmentType),
    ...dataToSend
  };
}
