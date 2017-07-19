import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.navigateAway = this.navigateAway.bind(this);
  }
  navigateAway() {
    this.props.navigator.push({title: 'Home'});
  }

  render() {
    let {data} = this.props.thread.item;
    let url = data.thumbnail ? data.thumbnail : false;
    let picture = url ? {uri: url} : require('../pictures/NoImg.png');
    return (
      <TouchableOpacity onPress={this.navigateAway} style={styles.threadContainer}>
        <View style={styles.upVote}>
          <Image style={styles.upArrow} source={require('../pictures/upArrow.png')} />
          <Text style={styles.up}> {data.ups} </Text>
          <Image style={styles.downArrow} source={require('../pictures/downArrow.png')} /> 
        </View>
        <Image style={styles.thumbtack} source={picture} />
        <View>
          <Text style={styles.threadTitle} > {data.title} </Text>
          <Text style={styles.subreddit}> subreddit: {data.subreddit} </Text>
          <Text style={styles.comments}> {data.num_comments} comments  share </Text>
        </View>
      </TouchableOpacity>
    )
  }
}