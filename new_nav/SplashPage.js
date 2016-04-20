'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

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

var SplashPage = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 2,});
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'green'}]}>
        <Text style={styles.welcome}>Greetings of the day for Splash Screen!</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcome}>Go to page one</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});


module.exports = SplashPage;