import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ListItemDetail extends React.Component {
    render() {
        let val = this.props.navigation.state.params.val;

        // console.log(this.props);
        // console.log(this.props.navigation.state.params);
        // console.log(val);
        return (
            <View key={this.props.keyval} style={styles.container}>
                <Text style={styles.itemText}>{val.name}</Text>
                <Text style={styles.itemText}>{val.description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5986e',
        margin: 10,
        minHeight: 100
    },
    itemText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});