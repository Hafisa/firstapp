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
        backgroundColor: COLORS.headerbgcolor,
        paddingBottom: 12
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
        color: COLORS.subtitle,
        paddingLeft: 5
    }

});
export default Header;
