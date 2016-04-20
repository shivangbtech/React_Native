/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

import React, {
  AppRegistry,
  Component,
Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactTestProject extends Component {
  render() {
var movie = MOCKED_MOVIES_DATA[0];
    return (
 <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 thumbnail: {
    width: 53,
    height: 81,
  },
 rightContainer: {
    flex: 1,
  },
title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },	
});

AppRegistry.registerComponent('ReactTestProject', () => ReactTestProject);
