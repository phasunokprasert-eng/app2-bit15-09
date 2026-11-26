import { Text, View, Image, StyleSheet} from 'react-native'

type CardProps = {
    id: number,
    name: string,
    image: string,
    price:number,
}

export default function Card({ id, name, image, price }: CardProps) {
    return (
        <View style={cardStyle.box}>
            <Image source={{ uri: image }} style={cardStyle.image}/>
            <Text>{name}</Text>
              <View style={cardStyle.box3}>
            <Text style={cardStyle.price}>{price} บาท</Text>
        </View>
        </View>
      
    )
}

const cardStyle = StyleSheet.create({
    box: {
        backgroundColor: "lightblue",
        gap: 10,
        margin: 10,
        borderRadius: 16,
        padding: 10
    },
     box3: {
        backgroundColor: "#bce77d",
        width:"100%",
        height: 40,
        borderRadius: 16,
        padding: 10,
        textAlign: "center",
        justifyContent: "center"
    },
    image: {
        width: 100,
        height: 100
    },
    price: {
        height: 20,
        textAlign: "center"
    }
})