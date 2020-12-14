import React from 'react'
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

export default function BackButton({ onPress }) {
    return (
        <AntDesign name="arrowleft" size={30} style={styles.icon} onPress={onPress}
        />
    )
}
