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
            <View key={this.props.keyval}>
                <Text>{this.props.val.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});