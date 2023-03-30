import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../styling/BookDetails.styled";

function BookInfo({details}) {
    return (
        <View style={styles.productDetails}>
            <View style={{flex: 1}}>
            <Text style={styles.author}>{details.author}</Text>
            <Text style={styles.title}>{details.title}</Text>
            <View style={styles.priceWrapper}>
                <Text style={styles.priceName}>Price</Text>
                <Text style={styles.price}>₦{details.price}</Text>
            </View>
            <View style={styles.productDesc}>
                <Text style={styles.descTitle}>Description</Text>
                <Text style={styles.description}>{details.description}</Text>
            </View>
            <View style={styles.stockdetails}>
                <View style={styles.stockInfo}>
                    <Text style={styles.stockTitle}>In Stock</Text>
                    <Text style={styles.quantity}>{details.quantity}</Text>
                </View>
                <View style={styles.control}>
                    <Pressable style={styles.controlBtn}>
                        <Text style={styles.controlText}>Decrease</Text>
                    </Pressable>
                    <TextInput style={styles.controlInput} selectionColor="grey" keyboardType="numeric"  />
                    <Pressable style={styles.controlBtn}>
                        <Text style={styles.controlText}>Increase</Text>
                    </Pressable>
                </View>
                <View style={styles.action}>
                    <Pressable style={styles.actionBtn1}>
                        <Text style={styles.controlText}>Delete</Text>
                    </Pressable>
                    <Pressable style={styles.actionBtn2}>
                        <Text style={styles.controlText}>Edit</Text>
                    </Pressable>
                </View>
            </View>
            </View>
        </View>
    )
}

export default BookInfo;