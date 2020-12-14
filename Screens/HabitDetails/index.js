import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BackButton from '../../Components/Common/BackButton';
import { SPACING, HEIGHT } from '../../Config/theme';
import styles from './styles';
import { detailsIcons } from '../../Data/salon';
import { AntDesign } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-navigation-shared-element';


const DURATION = 400;


const TOP_HEADER_HEIGHT = HEIGHT * 0.3;

const HabitDetails = ({ route, navigation }) => {
    const { item } = route.params;

    const ITEM_HEIGHT = HEIGHT * 0.18;
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0 }
        }>
            <SharedElement id={`item.${item.key}.background`} style={[StyleSheet.absoluteFillObject, { height: TOP_HEADER_HEIGHT + 32, backgroundColor: item.color, borderRadius: 0 }]} >
                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 0, height: TOP_HEADER_HEIGHT + 32 }]} />
            </SharedElement>


            <BackButton onPress={navigation.goBack} />
            <SharedElement id={`item.${item.key}.name`}>
                <Text style={styles.name}>
                    {item.name}
                </Text>
            </SharedElement>
            <SharedElement id={`item.${item.key}.image`}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </SharedElement>

            <SharedElement id="general.background">
                <View style={styles.bg}>
                    <ScrollView>
                        <View style={styles.detailIcons}>
                            {
                                detailsIcons.map((detail, index) => {
                                    return <Animatable.View
                                        animation="bounceIn"
                                        delay={DURATION + index * 100}
                                        key={`${detail.icon}-${index}`}
                                        style={[styles.detailIconItem, { backgroundColor: detail.color }]}
                                    >
                                        <AntDesign name={detail.icon} size={22} color='white' />
                                    </Animatable.View>
                                })
                            }
                        </View>
                        <View>
                            {item.categories.map((category, index) => {
                                return <Animatable.View
                                    animation="fadeInUp"
                                    delay={DURATION * 2 + index * 200}
                                    key={category.key}
                                    style={{ marginVertical: SPACING }}>
                                    <Text style={styles.title}>
                                        {category.title}
                                    </Text>
                                    {
                                        category.subcats.map((subcat, index) => {
                                            return <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SPACING / 2, marginLeft: SPACING }}>
                                                <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: 'gold', marginRight: SPACING }} />
                                                <Text style={styles.subTitle}>
                                                    {subcat}
                                                </Text>
                                            </View>
                                        })
                                    }

                                </Animatable.View>
                            })}
                        </View>
                    </ScrollView>
                </View>
            </SharedElement>
        </View >
    )
}

HabitDetails.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;

    return [
        {
            id: `item.${item.key}.background`
        },
        {
            id: `item.${item.key}.name`
        },
        {
            id: `item.${item.key}.image`
        },
        {
            id: 'general.background'
        }
    ]
}

export default HabitDetails;
