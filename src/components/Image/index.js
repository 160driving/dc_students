import React from 'react';
import { Image } from 'react-native';

import api from '_constants/api';

const ImageView = ({ style = {}, imageName }) => {
  const uri = `${api.baseUrl}/employers/logo/${imageName}`;
  return (
    <Image
      style={[{ marginTop: 10, width: 218, height: 71 }, style]}
      resizeMode="contain"
      source={{ uri }}
    />
  );
};

export default ImageView;
