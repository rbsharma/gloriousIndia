import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import EntityDescription from './entity-decription';
import { GroupModel } from '../../models/groups-model';

export default class EntityComponent extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#e2804a',
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 26,
            marginTop: 5,
            color: 'white',
        },
        title: `${navigation.state.params.title}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            isEntityDataFetched: false,
            EntityData: new GroupModel(),
            entityView: null
        }
        this.params = this.props.navigation.state.params;
        // console.log(this.params);
        // console.log(this.state);
    }

    componentDidMount() {
        if (this.params.entityData != null) {
            this.setState({ entityData: this.params.entityData, isEntityDataFetched: true }, () => {
                console.log(this.state);
                //this.CreateEntityView();
            });
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity activeOpacity={0.8}>
                    <EntityDescription />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});