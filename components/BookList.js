import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../styling/BookList.styled";

function BookList({item}) {
    return (
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [styles.container, pressed && styles.pressed]}>
            <View style={styles.wrapper}>
                <Image style={styles.productImage} source={item.image} />
                <View style={styles.bookDetails}>
                    <Text style={styles.bookTitle}>{item.title}</Text>
                    <Text style={styles.bookAuthor}>{item.author}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default BookList;