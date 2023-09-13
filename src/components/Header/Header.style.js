import { StyleSheet } from "react-native"
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        height: 80,
        paddingTop: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    text: {
        fontSize: 30,
        fontFamily: 'Poppins'

    },
    backStyle: {
        position: 'absolute', 
        left: 5,
        top: 40,
        
    },
    backItem: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})