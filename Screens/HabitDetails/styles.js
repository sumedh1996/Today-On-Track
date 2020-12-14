import { StyleSheet } from 'react-native';
import { HEIGHT, SPACING, WIDTH } from '../../Config/theme';

const ITEM_HEIGHT = HEIGHT * 0.18;
const TOP_HEADER_HEIGHT = HEIGHT * 0.3;

const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        fontSize: 20,
        position: 'absolute',
        resizeMode: 'contain',
        top: TOP_HEADER_HEIGHT - SPACING * 3,
        left: SPACING
    },
    jobTitle: {
        fontSize: 11,
        opacity: 0.7
    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'cover',
        position: 'absolute',
        top: HEIGHT * (0.3) - ITEM_HEIGHT * 0.8 + 10,
        right: SPACING
    },
    bg: {
        position: 'absolute',
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: 'white',
        transform: [{
            translateY: TOP_HEADER_HEIGHT
        }],
        borderRadius: 32,
        padding: SPACING,
        paddingTop: 32 + SPACING,
        backgroundColor: 'white',

    },
    detailIcons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: SPACING + 32,
        marginVertical: SPACING
    },
    detailIconItem: {
        height: 64, width: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: SPACING
    },
    subTitle: {
        fontSize: 14,
        opacity: 0.8
    }
})
export default styles;