import React from 'react';
import FormTab from './FormTab';
import allConfig from './config';
const config = allConfig['employment'];

const topText =
  'Please enter all relevant work history. Be sure to include every position you’ve held that involves driving a commercial vehicle. ';

class Employment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onNextPressed } = this.props;
    return (
      <FormTab
        config={config}
        topText={topText}
        onButtonPress={onNextPressed}
      />
    );
  }
}

export default Employment;
