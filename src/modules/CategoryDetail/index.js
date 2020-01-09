import React, { Component, Fragment } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {
  proportionWidth as pw,
  proportionHeight as ph
} from '_helpers/dimensions';
const win = Dimensions.get('window');

import { Header } from '_components';
import ListItem from './ListItem';

import categoryDetails from './CategoryDetails';

class PreTripDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  render() {
    const { title } = this.props.navigation.state.params;
    const listData = categoryDetails[title];

    return (
      <Fragment>
        <Header
          title={title}
          goBack={true}
          onBackPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={{ flex: 1 }} />
        <Carousel
          removeClippedSubviews={false}
          ref={c => {
            this._carousel = c;
          }}
          data={listData}
          renderItem={({ item, index }) => {
            return (
              <ListItem key={index} title={item.title} specs={item.values} />
            );
          }}
          sliderWidth={win.width}
          itemWidth={win.width - pw(120)}
          itemHeight={win.height - ph(300)}
        />
      </Fragment>
    );
  }
}

export default PreTripDetail;
