import React from 'react';

import FormTab from './FormTab';
import allConfig from './config';
const config = allConfig['cdl'];

class CDL extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onNextPressed } = this.props;
    return <FormTab config={config} onButtonPress={onNextPressed} />;
  }
}

export default CDL;
