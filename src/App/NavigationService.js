import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
  console.log('_navigator:', _navigator);
}

function getRoute(route) {
  const { index, routeName, routes } = route;
  if (!!routes) {
    return getRoute(routes[index]);
  } else {
    return routeName;
  }
}

function getCurrentRoute() {
  const route = _navigator.state.nav;
  return getRoute(route);
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
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
  navigateToChat
};
