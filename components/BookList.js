import { Image, Text, View } from "react-native";
import { styles } from "../styling/BookList.styled";

function BookList({item}) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.productImage} source={item.image} />
                <View style={styles.bookDetails}>
                    <Text style={styles.bookTitle}>{item.title}</Text>
                    <Text style={styles.bookAuthor}>{item.author}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </View>
        </View>
    )
}

export default BookList;