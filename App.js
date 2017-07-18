import { Navigator } from 'react-native-navigation';
import React, {Component} from 'react';
import BaseApp from './screens/baseApp.js';
import { Provider } from "react-redux";
import { registerScreens } from './screens';
import store from './store.js'
// registerScreens(); 

// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: 'One',
//       screen: 'firstScreen', // this is a registered name for a screen
//       title: 'baseApp'
//     }
//     // {
//     //   label: 'Two',
//     //   screen: 'example.SecondTabScreen',
//     //   title: 'Screen Two'
//     // }
//   ]
// });

export default class Reddit extends Component {

  render() {
    return (
      <Navigator
          initialRoute={{name: 'My First Scene', index: 0}}
          renderScene={this.navigatorRenderScene.bind(this)}
            />
    )
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Home': {
        return (
          <Provider store={store}>
            <BaseApp
              navigator={navigator}
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
}