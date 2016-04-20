'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} = React;

var PageOne = require('./PageOne');
var PageTwo = require('./PageTwo');
var SplashPage = require('./SplashPage');


var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  // Make it snap back really quickly after canceling pop
  snapVelocity: 8,
  // Make it so we can drag anywhere on the screen
  edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
  // Use our custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture,
  }
});

var ReactTestProject = React.createClass({
  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <SplashPage navigator={navigator} />
    } else if (route.id === 2) {
      return <PageOne navigator={navigator} />
    }else if (route.id === 3) {
           return <PageTwo navigator={navigator} />
         }
  },

  _configureScene(route) {
    return CustomSceneConfig;
  },

  render() {
    return (
      <Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene}
        configureScene={this._configureScene} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});

AppRegistry.registerComponent('ReactTestProject', () => ReactTestProject);

module.exports = ReactTestProject;