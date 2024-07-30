/*
 * List of functions for the navigation purposes.
 *
 */

import {
  CommonActions,
  DrawerActions,
  StackActions,
  TabActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

/**
 * Check that if navigation is ready or not
 * @param {() => void} moveCallback - function called when navigation ready
 */
const navigationCheck = (moveCallback: () => void): void => {
  if (!navigationRef.isReady()) {
    setTimeout(() => navigationCheck(moveCallback), 50);
  } else {
    moveCallback?.();
  }
};

/**
 * Used for navigation with pop
 * @param {number} screenCount - number of screen to pop
 * @param {boolean} isPopToTop - if true, navigation to pop to top
 */
const navigationPop = (
  screenCount: number = 0,
  isPopToTop: boolean = false,
): void => {
  navigationCheck(() => {
    const popAction = isPopToTop
      ? StackActions.popToTop()
      : StackActions.pop(screenCount);
    navigationRef.dispatch(popAction);
  });
};

/**
 * Used for navigate back
 */
const navigateBack = (): void => {
  navigationCheck(() => {
    const backAction = CommonActions.goBack();
    navigationRef.dispatch(backAction);
  });
};

/**
 * Used for toggle drawer
 */
const navigationToggleDrawer = (): void => {
  navigationCheck(() => {
    const toggleAction = DrawerActions.toggleDrawer();
    navigationRef.dispatch(toggleAction);
  });
};

/**
 * Used for navigation with replace
 * @param {string} routeName - routename to replace
 * @param params - params for replace
 */
const navigationWithReplace = (routeName: string, params = {}): void => {
  navigationCheck(() => {
    const replaceAction = StackActions.replace(routeName, params);
    navigationRef.dispatch(replaceAction);
  });
};

/**
 * Used for navigation with params
 * @param {string} routeName - route name to navigate
 * @param params - params for navigation
 * @param {boolean} merge - whether or not merge the params
 */
const navigationWithParam = (
  routeName: string,
  params = {},
  merge: boolean = false,
): void => {
  navigationCheck(() => {
    const navigateAction = CommonActions.navigate({
      name: routeName,
      params,
      merge,
    });
    navigationRef.dispatch(navigateAction);
  });
};

/**
 * Used for navigation with push method
 * @param {string} routeName - routename for push navigation
 * @param params - params for push navigation
 */
const navigateWithPush = (routeName: string, params = {}): void => {
  navigationCheck(() => {
    const pushAction = StackActions.push(routeName, params);
    navigationRef.dispatch(pushAction);
  });
};

/**
 * Used for navigation with jumpTo method
 * @param {string} routeName - routename for jumpTo navigation
 * @param params - params for jumpTo navigation
 */
const navigateWithJump = (routeName: string, params = {}): void => {
  navigationCheck(() => {
    const pushAction = TabActions.jumpTo(routeName, params);
    navigationRef.dispatch(pushAction);
  });
};

/**
 * Used for reset the navigation
 * @param {string} stackName - stackname used for reset navigation
 * @param {string} routeName - routename which reset the navigation
 * @param params - params used for reset navigation
 */
const navigateWithReset = (
  stackName: string,
  routeName: string,
  params = {},
): void => {
  navigationCheck(() => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: stackName,
          state: {routes: [{name: routeName, params}]},
        },
      ],
    });
    navigationRef.dispatch(resetAction);
  });
};

export {
  navigateBack,
  navigateWithJump,
  navigateWithPush,
  navigateWithReset,
  navigationPop,
  navigationRef,
  navigationToggleDrawer,
  navigationWithParam,
  navigationWithReplace,
};
