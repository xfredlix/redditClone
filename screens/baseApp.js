import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles.js';

export default class App extends React.Component {

  componentWillMount() {
    fetch('https://www.reddit.com/.json')  
    .then(function(response) {
      console.log(response.json())
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app called reddit!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
