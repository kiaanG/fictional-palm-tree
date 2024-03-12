import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={{backgroundColor:'black'}}>
          <Image
            source={require('../assets/cri.png')}
            style={{ width: 300, height: 100, alignSelf: 'center' }}
          />
          <View>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate("Batting")}>
            <Image source={require('../assets/sue.png')}
            style={{ width: 150, height: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          </View>
            <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Bowling")}>
            <Image source={require('../assets/boom.png')}
            style={{ width: 200, height: 220, alignSelf: 'center', marginTop:25 }}
            />
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Fielding")}>
            <Image source={require('../assets/kohli.png')}
            style={{ width: 250, height: 150, alignSelf: 'center', marginTop:50}}
            />
          </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}
