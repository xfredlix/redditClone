import { Navigation } from 'react-native-navigation';

import BaseApp from './baseApp.js';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('firstScreen', () => BaseApp);
  // Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  // Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
}