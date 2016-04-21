
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';

var PickerAndroid = require('PickerAndroid');
var TextStylePropTypes = require('TextStylePropTypes');

var Dropdown = require('react-native-dropdown-android');

class DroupDown extends Component {



  render() {
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <Dropdown
        style={{ height: 20, width: 200}}
        values={[ '--Choose--', 'one', 2, 3.5, { four: 4 }, [ 5, 6, 7 ], false ]}
        selected={1} onChange={(data) => { console.log(data); }} />
            </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DroupDown', () => DroupDown);
