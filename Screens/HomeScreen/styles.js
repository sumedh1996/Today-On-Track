import { StyleSheet } from 'react-native';
import { HEIGHT, SPACING, WIDTH } from '../../Config/theme';

const ITEM_HEIGHT = HEIGHT * 0.18;

const styles = StyleSheet.create({
    category: {
        fontSize: 30,
        padding: SPACING,
        fontWeight: '800'
    },
    flatListContainer: {
        marginTop: SPACING * 2
    },
    name: {
        fontWeight: '700',
        fontSize: 18,
        position: 'absolute'
    },
    jobTitle: {
        fontSize: 11,
        opacity: 0.7,
        marginTop: 18 * 1.2
    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'cover',
        position: 'absolute',
        bottom: 0,
        right: SPACING
    },
    bg: {
        position: 'absolute',
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: 'red',
        transform: [{
            translateY: HEIGHT
        }],
        borderRadius: 32
    }
})
export default styles;