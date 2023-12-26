
import React from 'react';
import { View, Text, Image, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function ProductDetail({ route }) {
    
    //   const { name, url, price, specification } = route.params;
    const navigation=useNavigation()
    const { name, url, price } = route.params;
    return <ScrollView>
        <View
                    style={{
                        flex: 30,
                        borderWidth: 1,
                        borderRadius: 10,
                        marginHorizontal: 10,
                    }}
                >
                    <Image
                        source={{ uri: url }}
                        style={{ height: 200, width: "100%", resizeMode: "center" }}
                    />
                    <Text>Name: {name}</Text>
                    <Text>Price: ${price}</Text>
                </View>
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Cart');
                }}
                style={{
                    backgroundColor: '#21a3d0',
                    justifyContent: 'center',
                    marginTop:10,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 10,
                    height: 30,

                    marginHorizontal:50
                }}>
                <Text style={{
                    color: 'white',

                }}>Them Vao Thanh Toan</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>


};

export default ProductDetail;

