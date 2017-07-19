import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles.js';
import * as app from '../actions/appActions.js';
import Thread from './thread.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class App extends React.Component {

  componentWillMount() {
    if (this.props.state.threads.length === 0 && this.props.actions.loadRedditData) {
      fetch('https://www.reddit.com/.json')  
      .then(res => res.json())
      .then(json => this.props.actions.loadRedditData(json.data.children))
      .catch(err => console.error(err))
    }
  }

  renderThread() {

  }

  render() {
    console.log(Object.keys(this.props.state.threads))
    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.app
  }),
  (dispatch) => ({
    actions: bindActionCreators(app.default, dispatch)
  })
)(App);