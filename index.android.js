/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var MOCKED_MOVIES_DATA = [
 {title:'Title',year:'2015',posters:{thumbnil:'http://i.imgur.com/UePbdph.jpg'}},
];

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var FirstProject = React.createClass({
  render: function() {

    var movie = MOCKED_MOVIES_DATA[0];

    return (
      <View style={styles.container}>
          <Image style={styles.thumbnil}  
              source={{uri: movie.posters.thumbnil}}/>
          <View style={styles.rightContainer}>
              <Text>{movie.title}
              </Text>
              <Text>{movie.year}
              </Text>
          </View>
    </View>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


   rightContainer: {
    flex: 1,
  },

  
   thumbnil:{
      width: 53,
      height: 81,
    } ,

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

AppRegistry.registerComponent('FirstProject', () => FirstProject);
