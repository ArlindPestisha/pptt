import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BB86FC'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputContainer: {
        width: '100%'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        width: '80%'
        
    },
})

export default styles