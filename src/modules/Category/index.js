import React, { Component, Fragment } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import { Header, Loader } from '_components';
import DashboardActions from '_store/models/dashboard';

import ListItem from './ListItem';
import { list, listItem } from './styles';

class Category extends Component {
  componentDidMount() {
    const { getCategoryInfo, navigation } = this.props;
    const { type } = navigation.state.params;

    getCategoryInfo(type);
  }

  onItemPressed = section => {
    const { navigation } = this.props;
    const { type } = navigation.state.params;

    if (type === 1) {
      navigation.navigate('CategoryDetail', { title: section.label });
    }
  };

  mapListData(data) {
    if (data.length % 2 === 0) {
      return data;
    } else {
      const newData = [...data, { empty: true }];
      return newData;
    }
  }

  getTitle = () => {
    const { type } = this.props.navigation.state.params;

    const typeToParam = {
      1: 'Pre-Trip',
      2: 'Road',
      3: 'Skills'
    };

    return typeToParam[type];
  };

  render() {
    const { categories, navigation, loadingCategory } = this.props;
    const { goBack } = navigation;
    const title = this.getTitle();

    return (
      <Fragment>
        <Loader loading={loadingCategory} />
        <Header title={title} goBack={true} onBackPressed={() => goBack()} />

        {categories.length != 0 && (
          <FlatList
            style={list}
            numColumns={2}
            data={this.mapListData(categories)}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            renderItem={({ item, index }) => {
              if (item.empty) {
                return <View key={index} style={listItem} />;
              }
              return (
                <ListItem
                  key={item.id}
                  id={item.id}
                  onItemPressed={() => this.onItemPressed(item)}
                  index={index}
                  performance={item.performance}
                  title={item.label}
                />
              );
            }}
          />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ dashboard }) {
  const { categories, loadingCategory } = dashboard;

  return { categories, loadingCategory };
}

export default connect(mapStateToProps, DashboardActions)(Category);
