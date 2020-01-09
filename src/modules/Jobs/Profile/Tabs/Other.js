import React from 'react';

import FormTab from './FormTab';
import allConfig from './config';
const config = allConfig['other'];

const topText =
  'Please enter all relevant work history. Be sure to include every position you’ve held that involves driving a commercial vehicle. ';

class Other extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onFinishPressed, loading } = this.props;
    return (
      <FormTab
        topText={topText}
        config={config}
        buttonTitle="Finish"
        onButtonPress={onFinishPressed}
        loading={loading}
      />
    );
  }
}

export default Other;
