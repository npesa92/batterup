import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const homeStyles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 48,
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20
    }
});

export const Home = () => {
    return (
        <View style={homeStyles.wrapper}>
            <Text style={homeStyles.text}>increasing the love of baseball one bet at a time</Text>
        </View>
    )
};
