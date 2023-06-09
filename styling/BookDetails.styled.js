import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#e4e8eb',
        paddingTop: 65,
    },
    wrapper: {
        height: 350,
        backgroundColor: '#e4e8eb',
        paddingHorizontal: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 50,
        backgroundColor: '#e4e8eb'
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
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        height: '100%'
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
    },
    stockdetails: {
        paddingVertical: 20,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    stockInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    stockTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat_600',
        color: '#a6a6a6'
    },
    quantity: {
        fontSize: 16,
        fontFamily: 'Montserrat_600',
    },
    control: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    controlBtn: {
        height: 50,
        minWidth: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 5
    },
    controlText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat_600',
        fontSize: 13
    },
    controlInput: {
        height: 50,
        borderColor: 'grey',
        minWidth: 100,
        borderWidth: 1,
        flex: 1,
        marginHorizontal: 10,
        textAlignVertical: 'center', 
        textAlign: 'center',
        borderRadius: 5
    },
    action: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionBtn1: {
        color: 'white',
        height: 50,
        minWidth: 100,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        flex: 1,
        marginRight: 3,
        borderRadius: 5
    },
    actionBtn2: {
        color: 'white',
        height: 50,
        minWidth: 100,
        backgroundColor: '#0366d6',
        justifyContent: 'center',
        flex: 1,
        marginLeft: 3,
        borderRadius: 5
    }

})