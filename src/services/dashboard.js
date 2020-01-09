import base from './base';

export const attendanceInfoService = () =>
  base.get('student_card').catch(err => {});

export const categoryInfoService = () => base.get('questions');

// export const attendanceInfoService = () =>
//   new Promise((resolve, reject) => {
//     base.get('student_card').then(res => {
//       const data = transformStudentCard(res.data)
//       resolve(data)

//     }).catch(reject);
//   })

// export const categoryInfoService = () => base.get('questions');
