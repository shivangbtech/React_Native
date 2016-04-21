# React_Native

# Install :

npm install --save react-native-dropdown-android



# Usage:

var Dropdown = require('react-native-dropdown-android');
...

  render() {
    return (
      <Dropdown
        style={{ height: 20, width: 200}}
        values={[ '--Choose--', 'one', 2, 3.5, { four: 4 }, [ 5, 6, 7 ], false ]}
        selected={1} onChange={(data) => { console.log(data); }} />
    );
  }
  
  
# Reference:
  https://github.com/chymtt/ReactNativeDropdownAndroid
