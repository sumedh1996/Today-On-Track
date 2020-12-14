import React from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './styles';
import HamBurger from '../../Components/Common/HamBurger'
import { titleCategory } from '../../Data/Category';
import SearchBar from '../../Components/Common/SearchBar'
import salon from '../../Data/salon';
import { SPACING, HEIGHT } from '../../Config/theme';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';


const ITEM_HEIGHT = HEIGHT * 0.18;

export default function HomeScreen() {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 25 : 0, flex: 1 }}>
            <HamBurger />
            <FlatList
                data={titleCategory}
                keyExtractor={(item) => { item.key }}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={styles.category}>{item.categoryName}</Text>
                        </View>
                    )
                }}

            />
            <SearchBar />

            <FlatList
                data={salon}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{ padding: SPACING }}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => {
                        navigation.navigate('HabitDetails', { item })
                    }} style={{ marginBottom: SPACING, height: 150 }}>
                        <View style={{ flex: 1, padding: SPACING }}>
                            <SharedElement id={`item.${item.key}.background`} style={[StyleSheet.absoluteFillObject]}>
                                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]} />
                            </SharedElement>

                            <SharedElement id={`item.${item.key}.name`}>
                                <Text style={styles.name}>
                                    {item.name}
                                </Text>
                            </SharedElement>
                            <Text style={styles.jobTitle}>
                                {item.jobTitle}
                            </Text>
                            <SharedElement id={`item.${item.key}.image`} style={styles.image}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                            </SharedElement>

                        </View>
                    </TouchableOpacity>
                }}
            />
            <SharedElement id="general.background">
                <View style={styles.bg} />
            </SharedElement>

        </SafeAreaView>
    )
}
