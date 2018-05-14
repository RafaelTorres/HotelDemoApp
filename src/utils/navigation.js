export function getCurrentRouteName(navState) {
  if (!navState) {
    return null;
  }

  const navigationState = (navState && navState.toJS && navState.toJS()) || navState;

  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }

  return route.routeName;
}
