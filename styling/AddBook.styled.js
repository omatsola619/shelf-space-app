import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputForm: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    inputBox: {
        width: '100%',
        height: 50,
        borderColor: '#b3b3b3',
        borderWidth: 1,
        marginBottom: 30,
        borderRadius: 4,
        paddingLeft: 15
    },
    imagePicker: {
        marginBottom: 30,
    },
    imageBox: {
        height: 50,
        borderRadius: 4,
        backgroundColor: '#0366d6',
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        paddingRight: 10,
        fontFamily: 'Montserrat_600'
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitBtn: {
        width: '100%',
        height: 50,
        borderRadius: 4,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    submitText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Montserrat_600',
        textAlign: 'center'
    }
});