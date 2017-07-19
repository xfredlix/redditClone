import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'row',
  },
  thumbtack: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  threadContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  thread: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  upVote: {
    flexDirection: 'column',
    marginRight: 10,
  },
  upArrow: {
    height: 20,
    width: 20,
  },
  downArrow: {
    marginLeft: 2,
    height: 16,
    width: 16,
  },
  waterMark: {
    flexDirection: 'column',
    marginTop: 30,
    height: 50,
    width: 100,
  },
  logo: {
    width: 50,
    height: 50,
  },
  writing: {
    // flexDirection: 'row',
  },
  threadTitle: {
    fontSize: 14,
    flex: 0.8,
    flexWrap: 'wrap',
    width: Dimensions.get('window').width * .6,
  },
  subreddit: {
    fontSize: 10,
    color: '#B4CDCD'
  },
  comments: {
    fontSize: 10,
    color: '#9FB6CD'
  },
  up: {
    color: '#9FB6CD'
  }
});
