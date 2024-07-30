import {Dimensions, Platform, ScaledSize} from 'react-native';

/**
 * Get the width and height of the device screen
 * @returns {ScaledSize} - the width and height of the device screen
 */
let {width, height}: ScaledSize = Dimensions.get('window');

if (width > height) {
  [width, height] = [height, width];
}

/**
 * Guideline sizes based on standard ~5" screen mobile device
 */
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

/**
 * converts provided width to based on provided guideline size width
 * @param {number} size - The screen's width that UI element should cover
 * @returns {number} - The calculated scale depending on current device's screen width
 */
const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

/**
 * converts provided height to based on provided guideline size height
 * @param {number} size - The screen's height that UI element should cover
 * @returns {number} - The calculated scale depending on current device's screen height
 */
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

/**
 * converts provided size to based on provided guideline size
 * @param {number} size - The size of the font you want to scale
 * @param {number} [factor=0.5]  - The amount of scaling to apply to font sizes. Defaults to 0.5.
 * @returns {number} - The calculated moderate scale depending on current device's screen width
 */
const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

/**
 * A type that contains the global metrics for the current device
 * @typedef {Object} GlobalMetricsTypes - A type that contains the global metrics for the current device.
 */
interface GlobalMetricsTypes {
  isAndroid: boolean;
  isIos: boolean;
  isPad: boolean;
  isTV: boolean;
}

const GlobalMetrics: GlobalMetricsTypes = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isPad: Platform.OS === 'ios' && Platform.isPad,
  isTV: Platform.isTV,
};

export {
  GlobalMetrics,
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
};
