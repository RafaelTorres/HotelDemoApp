// Dependencies
import {
  Alert,
  Linking,
  Platform,
  Dimensions
} from 'react-native';

// Constants
import {TOUCH_DEBOUNCE_DELAY} from './constants';

// Local Assetts

/**
 * Open native browser in device
 * @param  {String} url URL to open in device
 */
export function openURLInBrowser(url) {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        const translateMSG = 'No fue  posible abrir la siguiente url: ';
        const message = `${translateMSG}: ${url}`;
        return showErrorAlert(message);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => {
      showErrorAlert(err.message);
    });
}

/**
 * Show RN Alert according to the configuration received
 * Usage reference https://facebook.github.io/react-native/docs/alert.html
 * @param  {String} title   Title to Alert Optional
 * @param  {String} message Message to Alert Optional
 * @param  {Array} buttons Option buttons to  execute actions in Alert Optional
 * @param  {Boolean} cancelable Allow dimiss Alert touch in screen or pressed buttons
 * @return {Alert}        Show RN Alert with config send
 */
export function showAlert(title, message = '', buttons = 'ok', cancelable = true) {
  Alert.alert(title, message, buttons, {cancelable});
}

/**
 * Default Alert to show errors messages
 * @param  {String} msg Message error to show
 */
export function showErrorAlert(message) {
  showAlert('Alert', message);
}

/**
 * Get system platform
 * @returns {string|*|string}
 */
export function getPlatform() {
  return Platform.OS;
}

/**
 * Get object dimension to devices
 * @returns {Object}
 */
export function getDimensions() {
  return Dimensions.get('window');
}

/**
 * Time lapse to control multi-touch
 * @returns {Function} Callback Action Pressed
 */
export function debounce(callback, wait = TOUCH_DEBOUNCE_DELAY, context = this) {
  let timeout = null;
  let callbackArgs = null;

  const later = () => callback.apply(context, callbackArgs);

  return () => {
    callbackArgs = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * To convert object to query string for URL
 * @param  {object} params variables in object
 * @return {string}         Query string for URL
 */
export function convertObjectToQueryString(params) {

  if (typeof params !== 'undefined' && params) {

    const queryString = [];

    Object.entries(params).forEach(([paramName, paramValue]) => {

      queryString.push(`${paramName}=${paramValue}`);

    });

    return queryString.join('&');

  }

  return '';

}
