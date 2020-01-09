import React from 'react';

import FormTab from './FormTab';
import allConfig from './config';
const config = allConfig['personal'];

class Personal extends React.PureComponent {
  render() {
    const { onNextPressed } = this.props;
    return <FormTab config={config} onButtonPress={onNextPressed} />;
  }
}

export default Personal;
