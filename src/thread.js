import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles.js';

export default class App extends React.Component {

  navigateAway() {
    this.props.navigator.push({title: 'Home'});
  }

  render() {
    let {data} = this.props.thread.item;
    let url = data.thumbnail ? data.thumbnail : false;
    let picture = url ? {uri: url} : require('../pictures/NoImg.png');
    return (
      <TouchableOpacity onPress={this.navigateAway.bind(this)} style={styles.thread}>
        <View style={styles.upVote}>
          <Image style={styles.upArrow} source={require('../pictures/upArrow.png')} />
          <Text style={styles.up}> {data.ups} </Text>
          <Image style={styles.downArrow} source={require('../pictures/downArrow.png')} /> 
        </View>
        <Image style={styles.thumbtack} source={picture} />
        <View style={styles.writing}>
          <Text style={styles.threadTitle} > {data.title} </Text>
          <Text style={styles.subreddit}> subreddit: {data.subreddit} </Text>
          <Text style={styles.comments}> {data.num_comments} comments  share </Text>
        </View>
      </TouchableOpacity>
    )
  }
}