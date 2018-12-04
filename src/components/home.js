import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import Feature from './feature';
import HomeTip from './home-tip';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                { title: 'LIST', route: 'List' },
                { title: 'TEMP', route: 'Temp' }]
        }
    }

    static navigationOptions = {
        headerTitleStyle: {
            fontWeight: '500',
            fontSize: 24,
            marginTop: 5,
            textAlign: 'center',
            alignSelf: 'center',
            color: 'black'
        },
        title: 'HOME'
    };

    render() {
        const { navigate } = this.props.navigation;
        let features = this.state.features.map((val, key) => {
            return (
                <TouchableOpacity activeOpacity={0.8} key={key}
                    onPress={() => { this.props.navigation.navigate(val.route) }}>
                    <Feature keyval={key} val={val} />
                </TouchableOpacity>
            )
        });

        return (
            <View style={styles.container}>
                <ScrollView>
                    <HomeTip />
                    {features}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    descriptionText: {
        padding: 5,
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
    }
});


//<TouchableOpacity activeOpacity={0.8} key={key} onPress={() => {
//    navigate('List', {
//        param: 'Sent from home',
//        param1: 'Another Param'
//    })
//}}>
//    <Feature keyval={key} val={val} />
//</TouchableOpacity>