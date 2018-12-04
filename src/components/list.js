import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ListItem from './list-item';
import ListTip from './list-tip';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'first element', description: 'lorem ipsum lloo lorem ipsum lloo lorem ipsum lloo' },
                { name: 'second element', description: 'lorem ipsum lloo  lorem ipsum lloo lorem ipsum lloo' },
                { name: 'third element', description: 'lorem ipsum lloo  lorem ipsum lloo lorem ipsum lloo' },
                { name: 'fourth element', description: 'lorem ipsum lloo  lorem ipsum lloo lorem ipsum lloo' },
                { name: 'fifth element', description: 'lorem ipsum lloo  lorem ipsum lloo lorem ipsum lloo' }]
        };
    }

    static navigationOptions = {
        // headerTitle instead of title
        //headerTitle: <ListTip />,
        //header: null,
        headerTitleStyle: {
            fontWeight: '500',
            fontSize: 24,
            marginTop: 5,
            textAlign: 'center',
            alignSelf: 'center',
            color: 'black'
        },
        title: 'LIST DETAIL'
    };

    HandleListItemClick = (val) => {
        // console.log('List Item clicked');
        // console.log(val);        
        // console.log(this.props.navigation);

        this.props.navigation.navigate('ListDetails', {
            val: val
        });
    }

    render() {
        //console.clear();
        console.log('console was cleared----------------');
        
        let listItems = this.state.items.map((val, key) => {
            return (
                <TouchableOpacity activeOpacity={0.8} key={key} onPress={() => this.HandleListItemClick(val)}>
                    <ListItem keyval={key} val={val} navigation={this.props.navigation} />
                </TouchableOpacity>
            )
        });
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListTip />
                    {listItems}
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});