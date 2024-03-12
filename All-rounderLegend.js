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

export default class AllRounder extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={{backgroundColor:'black'}}>
          <View>
          <Image
            source={require('../assets/Sir.png')}
            style={{ width: 325, height: 400, alignSelf: 'center' }}
            resizeMode="contain"
          />
          </View>
          <View>
          <Image
            source={require('../assets/SirText.png')}
            style={{ width: 325, height: 400, alignSelf: 'center' }}
            resizeMode="contain"
          />
          </View>
          <View style={{flexDirection: 'row'}}>
           <TouchableOpacity  onPress={() => this.props.navigation.navigate("Home")}>
            <Image source={require('../assets/home.png')}
            style={{ width: 50, height: 50, alignSelf: 'bottom left' }}
            />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate("InfoHome")}>
            <Image source={require('../assets/info.png')}
            style={{ width: 50, height: 50, marginLeft:20 }}
            />
          </TouchableOpacity>

          </View>
          
        </View>
      </SafeAreaProvider>
    )
  }
}