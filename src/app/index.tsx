import { FlatList, StyleSheet, Text, View } from 'react-native'

import products from '../products.json'

import Card from '@/components/card'

export default function App(){
    return(
        <View style={cardStyle.box2}>
            <Text style={cardStyle.title}>🛒รายการสินค้า</Text>

            <FlatList
            //ข้อมูลที่จะเรนเดอร์
            data={products}

            //คีย์หลัก
            keyExtractor={(item) => item.id.toString()}

            //component ที่จะแสดงผล
            renderItem={({item}) => (
              <Card 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              price={Number(item.price)}
              />
            )}

            />

        </View>
    )
}
const cardStyle = StyleSheet.create({
    box2: {
        backgroundColor: "green",
    },
    title:{
        fontSize:45,
        fontWeight:900,
        textAlign: "center"
    }
    })