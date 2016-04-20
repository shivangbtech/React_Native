'use strict';

var React = require('react-native');
var { View,
      Text,
      StyleSheet,
      TouchableHighlight,
      TextInput,
      ListView,
      Image,
      ViewPagerAndroid
      } = React;

var img_icon = require('./images.png');
var DrawerLayout = require('react-native-drawer-layout');
var SCREEN_WIDTH = require('Dimensions').get('window').width;
var SCREEN_HEIGHT = require('Dimensions').get('window').height;
var ViewPager = require('react-native-viewpager');
var TopScreen = require('./TopScreen');
var BottomScreen = require('./BottomScreen');

var DrawerLayoutExample = React.createClass({

  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     return {
       dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row3', 'row4']),
     };
  },

    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
      return (
        <TouchableHighlight onPress={() => this._listClick(rowData, rowID)}>
          <View>
            <View style={styles.container_list}>

<Image style={styles.thumb} source={img_icon} />

              <Text style={styles.text}>
                {rowData}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    },

 _listClick: function(rowData: string, rowID: number) {
    console.log(rowData + " " + rowID + "...........")
    },

  render: function() {
    var navigationView = (
      <View style={[{backgroundColor: '#fff'}, {flex: 1}]}>

           <View style={[{backgroundColor: '#246dd5'}, {height: (SCREEN_HEIGHT*30)/100}]}>
                <Text>Hello there!</Text>
           </View>

 <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
    />
           <TouchableHighlight onPress={() => this.drawer.closeDrawer()}>
                <Text>Close drawer</Text>
           </TouchableHighlight>
      </View>
    );

    return (
      <DrawerLayout
        onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
        onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
        drawerWidth={200}
        ref={(drawer) => { return this.drawer = drawer  }}
        keyboardDismissMode="on-drag"
        renderNavigationView={() => navigationView}>

        <View style={styles.container}>

    <TopScreen style={styles.viewpager}/>

          <Text style={styles.welcome}>Content!</Text>
          <Text>{this.state.drawerStateChangedOutput}</Text>
          <Text>{this.state.drawerSlideOutput}</Text>
          <TouchableHighlight onPress={() => this.drawer.openDrawer()}>
            <Text>Open drawer</Text>
          </TouchableHighlight>
          <TextInput style={styles.inputField} />
        </View>

      </DrawerLayout>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
        flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputField: {
    backgroundColor: '#F2F2F2',
    height: 40,
  },
  container_top: {
      height: 140,

    },
 separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
      width: 50,
      height: 50,
    },
     container_list: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
       pageStyle: {
          alignItems: 'center',
          padding: 20,
        },

          page: {
            width: SCREEN_WIDTH,
          },
           viewpager: {
              flex: 1,
height:240,
            },
});

module.exports = DrawerLayoutExample;
