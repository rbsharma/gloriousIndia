import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class GroupHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props.val);
    }
    render() {
        return (
            <View>
                <Text style={styles.descriptionText}>{this.props.val.description}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    descriptionText: {
        padding: 5,
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
    }
});