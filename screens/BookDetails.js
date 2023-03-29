import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BookInfo from "../components/bookDetails/BookInfo";
import Header from "../components/bookDetails/Header";
import ImageDetails from "../components/bookDetails/ImageDetails";
import { styles } from "../styling/BookDetails.styled";




function BookDetails({ route, navigation }) {
    const bookDetails = route.params.bookDetails;

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View>
                    <ImageDetails details={bookDetails} />
                    <BookInfo details={bookDetails} />
                </View>
            </ScrollView>
        </View>
    )
};

export default BookDetails;