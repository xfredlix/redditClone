import React from 'react';
import { Text, View, FlatList, RefreshControl, Image, TouchableOpacity } from 'react-native';
import styles from '../styles.js';
import * as app from '../actions/appActions.js';
import Thread from './thread.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class App extends React.Component {

  componentWillMount() {
    let {actions, state} = this.props
    if (state.threads.length === 0 && actions.loadRedditData) {
      this.fetchReddit();
    }
  }

  onRefresh() {
    let {actions, state} = this.props;
    actions.refreshing();
    this.fetchReddit().then(() => actions.refreshing());
  }

  fetchReddit() {
    let {actions} = this.props;
    return fetch('https://www.reddit.com/.json')  
    .then(res => res.json())
    .then(json => actions.loadRedditData(json.data.children))
    .catch(err => console.error(err))
  }

  goBack() {
    this.props.navigator.pop();
  }

  renderThread() {
    let {state, navigator} = this.props;
    return (
      <View style={styles.threadContainer} >
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
              />
          }
          data={state.threads}
          renderItem={(thread) => <Thread thread={thread} navigator={navigator}/>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.backWaterMark}>
          <Image style={styles.backButton} source={require('../pictures/backButton.png')} />
          <View style={styles.waterMark}>
            <Image source={require('../pictures/Reddit_logo.png')} style={styles.logo} />
            <Text style={styles.title}>Reddit Clone</Text>
          </View>
        </TouchableOpacity>
        {this.renderThread()}
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