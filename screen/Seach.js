
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text, Button} from 'react-native';

const TextInputExample = (props) => {
  return (
    <View style={styles.containers}>
        <Text style={styles.name} >Travel Go.</Text>
    <SafeAreaView>
        <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="Ban Muon Di Den Dau???"
      />
    <Button
  title="Tìm Kiếm"
  color="#21a3d0"
  width='100'
  borderRadius='10'
/>
      </View>
    </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eff7f8",
        alignItems:"center",
    },
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderRadius:10,
    borderWidth: 1,
    borderColor:"#21a3d0",
    padding: 10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:"center",
  },
  row:{
    flexDirection:'row',
    alignItems:"center",
  },
  name:{
    fontSize:24,
    color:"#21a3d0",
    fontWeight:'bold',
    paddingTop:10,
  },
});

export default TextInputExample;