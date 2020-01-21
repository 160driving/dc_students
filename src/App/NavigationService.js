import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function getRoute(route) {
  const { index, routeName, routes } = route;
  if (!!routes) {
    return getRoute(routes[index]);
  } else {
    return routeName;
  }
}

function resetRoute({ routeName, params }) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params })]
    })
  );
}

function getCurrentRoute() {
  const route = _navigator.state.nav;
  return getRoute(route);
}

function navigate({ routeName, params }) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function goBack(key = null) {
  _navigator.dispatch(NavigationActions.back({ key }));
}

function setParams({ params, key }) {
  _navigator.dispatch(NavigationActions.setParams({ params, key }));
}

function navigateInsideTabBar(tabBar, screen, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName: tabBar,
      action: NavigationActions.navigate({ routeName: screen, params })
    })
  );
}

function navigateToChat(tabBar, screen, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName: tabBar,
      action: NavigationActions.navigate({
        routeName: screen,
        action: NavigationActions.navigate({ routeName: 'Chat', params })
      })
    })
  );
}

export default {
  setTopLevelNavigator,
  navigate,
  navigateInsideTabBar,
  getCurrentRoute,
  navigateToChat,
  goBack,
  setParams,
  resetRoute
};
