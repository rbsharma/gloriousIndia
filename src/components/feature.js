import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View key={this.props.keyval} style={styles.container}>
                <Text style={styles.featureText}>{this.props.val.title}</Text>
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
    featureText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'#fff'
    }
});