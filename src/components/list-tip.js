import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListTip() {
    let description = `There are multiple items here. Each item can further be detailed by clicking on it. Try touching an item.`;
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
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});