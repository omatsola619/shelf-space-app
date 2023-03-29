import { Pressable, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styling/BookDetails.styled";

function Header() {
    return (
        <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
            <Text style={styles.headerTitle}>ShelfSpace</Text>
            <View></View>
        </View>
    )
}

export default Header