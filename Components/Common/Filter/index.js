import React from 'react'
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'

export default function index() {
    return (
        <MaterialIcons name="filter-list" size={30} style={styles.icon} />
    )
}
