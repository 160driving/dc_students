/*eslint max-len: ["error", { "ignoreRegExpLiterals": true }]*/
import { NavigationActions, StackActions } from 'react-navigation';

export const navigateTo = (navigation, stackName, routeName, params = {}) => {
  if (!stackName) {
    navigation.navigate(routeName, params);
  }
  if (!routeName) {
    navigation.navigate(stackName, params);
  }
  const navigateAction = NavigationActions.navigate({
    routeName: stackName,

    params: {},

    action: NavigationActions.navigate({ routeName, params })
  });

  navigation.dispatch(navigateAction);
  // if (shouldReset) {
  //   navigation.navigate({
  //     routeName: stackName,
  //     action: NavigationActions.navigate({
  //       routeName,
  //       params
  //     })
  //   });
  // } else {
  //   navigation.navigate({
  //     routeName: stackName,
  //     action: NavigationActions.navigate({
  //       routeName,
  //       params
  //     })
  //   });
  // }
};

export const resetInsideStack = (navigation, routeName) => {
  const navigateAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName })]
  });
  navigation.dispatch(navigateAction);
};
