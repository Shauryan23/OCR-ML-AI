import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#9D50BB', '#6E48AA']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>KARE-SKAN</Text>
          <Text style={styles.subtitle}>Optical Character Recognition</Text>
        </View>
        <View style={styles.imageView}>
          <Image
            source={require('./assets/400ic.png')}
            style={styles.scannerImage}></Image>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Camera Roll"
            titleStyle={{fontsize: 20}}
            containerStyle={{margin: 5}}
            buttonStyle={styles.button}></Button>
          <Button
            title="Click Photo"
            titleStyle={{fontsize: 20}}
            containerStyle={{margin: 5}}
            buttonStyle={styles.button}></Button>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 50,
    // marginLeft: 90,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#C9FFBF',
  },
  subtitle: {
    fontSize: 16,
    color: '#C9FFBF',
  },
  outputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 57,
    margin: 10,
    backgroundColor: '#43a047',
    borderRadius: 8,
  },
  imageView: {
    justifycontent: 'center',
  },
  scannerImage: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginBottom: 120,
  },
});
