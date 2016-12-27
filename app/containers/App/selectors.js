import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectAppDomain = () => (state) => state.get('app');

/**
 * Other specific selectors
 */
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};


/**
 * Default selector used by App
 */

const selectApp = () => createSelector(
  selectAppDomain(),
  (substate) => substate.toJS()
);

export default selectApp;
export {
  selectAppDomain,
  selectLocationState,
};
