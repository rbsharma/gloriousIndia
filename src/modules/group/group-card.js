import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class GroupCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container} key={this.props.keyval}>
                <Text style={styles.descriptionText}>{this.props.val.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        padding: 15,
        fontSize: 40,
        color: '#fff',
        fontWeight: '700',
    }
});