import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Temp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        let received = navigation.getParam('param', 'No param was sent');
        let allParams = navigation.state.params;
        return (
            <View>
                <Text>
                    Temp - {received} - {JSON.stringify(allParams)}
                </Text>
                <TouchableOpacity>
                    <Text onPress={() => { navigation.goBack() }}> Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    static navigationOptions = {
        title: 'TEMPORARY PAGE'
    }
}

//this.props.navigation.goBack()
//this.props.navigation.popToTop()