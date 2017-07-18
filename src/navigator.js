import { Navigator } from 'react-native';
import React, {Component} from 'react';
import BaseApp from './src/baseApp.js';
import { Provider } from "react-redux";

export default class Reddit extends Component {

  render() {
    return (
      <Navigator
          initialRoute={{name: 'My First Scene', index: 0, component: BaseApp}}
          renderScene={(route, navigator) =>
            <MySceneComponent
              name={route.name}
              onForward={(component) => {
                var nextIndex = route.index + 1;
                navigator.push({
                  name: 'Scene ' + nextIndex,
                  component: component,
                  index: nextIndex,
                });
              }}
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
        />
    )
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Home': {
        return (
          <Provider store={store}>
            <App
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