import React from 'react';
import { Pressable, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = ({title, onPress}) => {
    return(
//        <Pressable hitSlop='20' onPress={onPress} style={styles.container}>
//            <Text>{title}</Text>
//        </Pressable>
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
//        <TouchableOpacity/> // click will be visible
    )
}

export default Button;