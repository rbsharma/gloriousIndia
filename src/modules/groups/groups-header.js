import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../../styles/app-style';

export default class GroupsHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props.val);
    }
    render() {
        return (
            <View>
                <Text style={globalStyles.descriptionContainerText}>{this.props.val.description}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
});