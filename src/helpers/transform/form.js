export function transformFormData(formData) {
  const {
    miles,
    jobType,
    employmentType,
    minSalary,
    coordinates = {},
    jobHistory,
    minPerMile,
    city,
    state,
    street,
    street2,
    zip,
    address, //dont take this
    ...rest
  } = formData;

  const formattedJobHistory = jobHistory.map(function formatJobHistory(
    jobHistory
  ) {
    const {
      dateRange: { startDate, endDate },
      ...rest
    } = jobHistory;
    return {
      startDate,
      endDate,
      ...rest
    };
  });

  return (dataToSend = {
    jobFilters: {
      miles,
      jobType,
      employmentType,
      minSalary,
      coordinates,
      minPerMile
    },
    address: {
      city,
      state,
      street,
      street2,
      zip
    },
    jobHistory: formattedJobHistory,
    ...rest
  });
}
