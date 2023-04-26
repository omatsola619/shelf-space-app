import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    productImage: {
        width: 115,
        height: 150,
        borderRadius: 6,
    },
    sectionTitle: {
        fontFamily: "Poppins_500",
        fontSize: 16,
    },
    generalWrapper: {
        marginTop: 20,
    },
    wrapper: {
        paddingRight: 10,
    },
    firstChild: {
        paddingLeft: 10
    },
    productText: {
        fontFamily: 'Poppins_600',
        fontSize: 12,
        textAlign: "center",
        marginTop: 7,
        width: 120,
    },
    sectionWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    seeMore: {
        fontFamily: "Poppins_600",
        fontSize: 12,
        backgroundColor: '#ffae34',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5,
    }

});