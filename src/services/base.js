import axios from 'axios';
import { objToSnakeCase, objToCamelCase } from 'utils';
import AsyncStorage from '@react-native-community/async-storage';

import api from '_constants/api';

const getRequest = async () => {
  const token = await AsyncStorage.getItem('token');
  let headers = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const request = axios.create({
    baseURL: api.baseUrl,
    headers
  });

  request.interceptors.response.use(resp => {
    return new Promise(async (resolve, reject) => {
      console.log('respomse: ', resp);
      const { code } = resp.data;
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      if (code === 402) {
        axios({
          method: 'post',
          url: `${api.baseUrl}/refresh_token`,
          headers: {
            Authorization: `Bearer ${refreshToken}`
          }
        })
          .then(async res => {
            const accessToken = res.data.data.access_token;
            resp.config.headers.Authorization = `Bearer ${accessToken}`;
            AsyncStorage.setItem('token', accessToken);

            resolve(axios.request(resp.config));
          })
          .catch(err => reject(err));
      }

      resolve(resp.data);
    });
  });

  return request;
};

const handleResponse = res => {
  const dataToReturn = objToCamelCase(res);

  return Promise.resolve(dataToReturn);
};

const post = async (url, data) => {
  const request = await getRequest();
  const dataToPost = objToSnakeCase(data);

  return new Promise((resolve, reject) => {
    request({ url, method: 'post', data: dataToPost })
      .then(handleResponse)
      .then(resolve)
      .catch(reject);
  });
};

const patch = async (url, data) => {
  const request = await getRequest();
  const dataToPost = objToSnakeCase(data);

  return new Promise((resolve, reject) => {
    request({ url, method: 'patch', data: dataToPost })
      .then(handleResponse)
      .then(resolve)
      .catch(reject);
  });
};

const get = async (url, params = {}) => {
  const request = await getRequest();
  const paramsToSend = objToSnakeCase(params);

  return new Promise((resolve, reject) => {
    request({
      url,
      method: 'get',
      params: paramsToSend
    })
      .then(handleResponse)
      .then(resolve)
      .catch(reject);
  });
};

export default { post, get, patch };
