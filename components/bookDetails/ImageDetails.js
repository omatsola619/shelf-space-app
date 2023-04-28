import { Image, View } from "react-native";
import { styles } from "../../styling/BookDetails.styled";

function ImageDetails({details}) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.productImage}>
                {/* <Image style={styles.image} source={details.image} /> */}
            </View>
        </View>
    )
}

export default ImageDetails;