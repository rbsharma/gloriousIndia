import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HomeTip() {
    let description = 'Currently we support 1 features. These features are listed below.';
    return (
        <View style={styles.container}>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 2,
        borderRadius: 0,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: '#e2804a',
        backgroundColor: '#e2804a',
        height: 'auto',
    },
    descriptionText: {
        padding: 5,
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
    }
});