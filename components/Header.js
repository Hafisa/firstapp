import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../styles/Theme'
const Header = (props) => {
    const { title, subtitle } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        padding: 8,
        paddingLeft: 12,
        justifyContent: "flex-start", // main axis
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.title,
        paddingLeft: 5
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#d1d1d1',
        paddingLeft: 5
    }

});
export default Header;
