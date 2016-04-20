
'use strict';

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableNativeFeedback
} from 'react-native';

var Button = require('react-native-button');
import RctActivityModule from './RctActivityModule';

class ReactTestProject extends Component {

  render() {

    var TouchableElement = TouchableNativeFeedback;

    return (
    <View style={styles.container}>

        <Button
            style={{borderWidth: 1, borderColor: 'blue'}}
            onPress={() => Linking.openURL('my.special.scheme.openNativeOne://other/parameters/here')}>
            Open Native One using native button
        </Button>


        <TouchableElement style={styles.button}
             onPress={() => RctActivityModule.startActivity('MyExtraParam')}>
             <View>
                 <Text style={styles.buttonText}>
                     Open native Two using react native button
                 </Text>
             </View>
        </TouchableElement>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 flexDirection: 'column',
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
  	 button_container: {

        backgroundColor: '#F5FCFF',
      },
});

AppRegistry.registerComponent('ReactTestProject', () => ReactTestProject);
