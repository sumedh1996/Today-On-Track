import React from 'react'
import { View, Text, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import styles from './styles'

export default function index() {
    return (
        <View style={styles.container}>
            <EvilIcons name="search" size={34} style={styles.icon} />
            <TextInput placeholder="Search" style={styles.textInput} />
        </View>
    )
}
