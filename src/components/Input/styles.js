import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
//        flexDirection: 'row',
//        alignItems: 'center',
//        backgroundColor: colors.blue,
//        paddingVertical: 20,
//        paddingHorizontal: 8,
//        borderRadius: 8,
//        width: '100%'
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    eye: {
        width: 24,
        height: 18,
        marginHorizontal: 16,
    }
})