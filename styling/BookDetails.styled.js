import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white'
    },
    wrapper: {
        paddingTop: 65,
        height: 450,
        backgroundColor: '#e4e8eb',
        paddingHorizontal: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontFamily: 'Montserrat_700',
        fontSize: 18,
    },
    productImage: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 30
    },
    image: {
        width: 200,
        height: 280,
        borderRadius: 5,
        borderRadius: 10,
    },
    productDetails: {
        height: '100%',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    author: {
        fontSize: 16,
        fontFamily: 'Montserrat_600',
        color: '#a6a6a6'
    },
    title: {
        fontSize: 27,
        fontFamily: 'Montserrat_600',
        paddingBottom: 10
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 30,
    },
    priceName: {
        fontSize: 16,
        color: '#a6a6a6',
        fontFamily: 'Montserrat_600',
        paddingRight: 10
    },
    price: {
        fontSize: 16,
        fontFamily: 'Montserrat_600',
    },
    productDesc: {
        paddingBottom: 30
    },
    descTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat_600',
        paddingBottom: 5
    },
    description: {
        fontSize: 18,
        color: '#666',
        fontFamily: 'Montserrat_500',
    }

})