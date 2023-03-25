import { Text, View } from "react-native";
import { styles } from "../styling/BookDetails.styled";

function BookDetails({route}) {
    const bookDetails = route.params.bookDetails;

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    
                </View>
            </View>
            
        </View>
    )
};

export default BookDetails;