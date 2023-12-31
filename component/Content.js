
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View, Text, Image } from 'react-native';
import axios from 'axios';

function Content() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  

  return (
    <View style={{ width: '100%', backgroundColor: 'white', flex: 70 }}>
      <FlatList
        keyExtractor={(item) => item.name}
        numColumns={1}
        data={products}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('productDetail', {
                name: item.title,
                url: item.image,
                price: item.price,
                // Thêm hàm addToCart vào navigation params
              })
            }
            style={{
              flex: 1,
              marginTop: 5,
              marginBottom: 5,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'grey',
              width:250,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  margin: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{ color: 'red', marginStart: 10 }}>
                ${item.price}
              </Text>
            </View>
            <Text style={{ color: 'grey' }}>{item.title}</Text>
            <View style={{ flex: 1 }}>
              <View style={{ height: 30 }}></View>
              
              
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Content;