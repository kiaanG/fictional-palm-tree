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

export default class InfoHome extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={{backgroundColor:'black'}}>
          <Image
            source={require('../assets/infoAboutLegs.png')}
            style={{ width: 300, height: 100, alignSelf: 'center' }}
          />
          <View>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate("BattingLegend")}>
            <Image source={require('../assets/batting_legend-removebg-preview.png')}
            style={{ width: 150, height: 200, alignSelf: 'center' }}
            />
          </TouchableOpacity>
          </View>
            <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("BowlingLegend")}>
            <Image source={require('../assets/bowling_legend-removebg-preview.png')}
            style={{ width: 150, height: 200, alignSelf: 'center', marginTop:25 }}
            />
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AllRounder")}>
            <Image source={require('../assets/all-rounder_legend-removebg-preview.png')}
            style={{ width: 150, height: 200, alignSelf: 'center', marginTop:50}}
            />
          </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}
