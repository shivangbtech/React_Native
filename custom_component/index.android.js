
'use strict';


var CustomTest = require('./CustomTest');

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';



class ReactTestProject extends Component {
  render() {
    return (
    <Navigator
            initialRoute={{id: 'CustomTest' name: 'Index'}}
            renderScene={this.renderScene.bind(this)}
             configureScene={(route) => {
                        if (route.sceneConfig) {
                          return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                      }} />
    );
  }

   renderScene(route, navigator) {
          return (<CustomTest navigator={navigator}/>);
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
