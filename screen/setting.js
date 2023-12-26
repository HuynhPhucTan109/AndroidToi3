import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const App = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ScrollView style={styles.scrollViewRow}>
          <View style={styles.roww}>
        <ImageBackground source={{
          uri: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
        }} resizeMode="cover" margin={10} borderRadius={10} width={100} style={styles.image}>
        <Text style={styles.text}>
        </Text>
        
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Chi tiết</Text>
      </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={{
          uri: "https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&o=",
          }} resizeMode="cover" margin={10} borderRadius={10} width={100} style={styles.image}>
        <Text style={styles.text}>
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Chi tiết</Text>
      </TouchableOpacity>
        </Text>
        </ImageBackground>
        </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
const getDataUsingSimpleGetCall = () => {
  axios
    .get('https://fakestoreapi.com/products')
    .then(function (response) {
      // handle success
      alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    })
    .finally(function () {
      // always executed
      alert('Finally called');
    });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    flexDirection:'row',
    //paddingTop:50,
  },
  text: {
    fontSize: 42,
    width: 250,
    height: 300,
    margin: 12,
    padding:10,
    borderRadius: 10,
    color: '#21a3b0',
    fontSize: 22,
    lineHeight: 84,
    fontWeight: 'bold',
    //textAlign: 'center',
    //backgroundColor: '#000000c0',
  },
  roww:{
    flexDirection:'row',
    borderBottom:'1',
    //paddingHorizontal:'10',
    padding:'10',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;