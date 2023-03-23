import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        marginBottom: 25,
        paddingHorizontal: 7,
        paddingVertical: 7,
        marginHorizontal: 10,
        borderRadius: 7,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',

    },
    pressed: {
        opacity: 0.55,
    } ,
    wrapper: {
        flexDirection: 'row',
        width: '100%',
    },
    productImage: {
        width: 80,
        height: 100,
        borderRadius: 5,
    },
    bookDetails: {
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    bookTitle: {
        fontSize: 17,
        fontFamily: 'Montserrat_600',
        paddingBottom: 7,
        color: 'black'
    },
    bookAuthor: {
        fontSize: 14,
        color: 'grey',
        fontFamily: 'Inter_600',
        paddingBottom: 20,
    },
    price: {
        fontSize: 15,
        fontFamily: 'Montserrat_600',
        color: '#0366d6'
    }
});