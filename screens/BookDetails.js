import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../styling/BookDetails.styled";
import { Ionicons } from '@expo/vector-icons';

function BookDetails({ route, navigation }) {
    const bookDetails = route.params.bookDetails;

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.headerTitle}>ShelfSpace</Text>
                    <View></View>
                </View>
                <View style={styles.productImage}>
                    <Image style={styles.image} source={bookDetails.image} />
                </View>
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.author}>{bookDetails.author}</Text>
                <Text style={styles.title}>{bookDetails.title}</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.priceName}>Price</Text>
                    <Text style={styles.price}>${bookDetails.price}</Text>
                </View>
                <View style={styles.productDesc}>
                    <Text style={styles.descTitle}>Description</Text>
                    <Text style={styles.description}>{bookDetails.description}</Text>
                </View>
                <View style={styles.stockdetails}>
                    
                </View>
            </View>

        </View>
    )
};

export default BookDetails;