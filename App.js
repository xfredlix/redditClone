import { Navigator } from 'react-native-deprecated-custom-components';
import React, {Component} from 'react';
import BaseApp from './screens/baseApp.js';
import { Provider } from "react-redux";
import store from './store.js'

export default class Reddit extends Component {

  render() {
    return (
      <Navigator
          initialRoute={{title: 'Home', index: 0}}
          renderScene={this.navigatorRenderScene}
            />
    )
  }

  navigatorRenderScene(route, navigator) {
    switch (route.title) {
      case 'Home': {
        return (
          <Provider store={store}>
            <BaseApp
              navigator={navigator}
              onBack={this.onBack}
            />
          </Provider>
        )
      }

      case 'Camera': {
        return (
          <camera
            navigator={navigator}
          />
        )
      }
    }
  }

  onBack() {
    if (route.index > 0) {
      navigator.pop();
    }
  }
}