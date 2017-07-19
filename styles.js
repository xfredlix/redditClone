import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  thumbtack: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  threadContainer: {
    flexDirection: 'row',
    margin: 10,
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
    height: 200,
    width: 60,
  },
  logo: {
    width: 50,
    hegith: 50,
  },
});
