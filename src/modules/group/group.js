import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import GroupHeader from './group-header';
import EntityCard from '../entity/entity-card';
import { GroupModel } from '../../models/groups-model';
import globalStyles from '../../styles/app-style';

export default class GroupComponent extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            //backgroundColor: '#e2804a',
            backgroundColor: navigation.state.params.colorTheme,
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
            isGroupDataFetched: false,
            groupData: new GroupModel(),
            entityListView: null
        }
        this.params = this.props.navigation.state.params;
        console.log(this.params);
        //console.log(this.state);
    }

    componentDidMount() {
        if (this.params.groupData != null) {
            this.setState({ groupData: this.params.groupData, isGroupDataFetched: true }, () => {
                console.log(this.state);
                this.CreateEntityListView();
            });
        }
    }

    CreateEntityListView() {
        if (this.state.isGroupDataFetched) {
            let _entityListView = this.state.groupData.entities.map((val, key) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} key={key}
                        onPress={() => {
                            this.props.navigation.navigate('entity',
                                { entity: val, title: val.title })
                        }}>
                        <EntityCard keyval={key} val={val} />
                    </TouchableOpacity>
                )
            });
            this.setState({ entityListView: _entityListView });
        }
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <GroupHeader val={this.state.groupData} />
                    </View>
                    {this.state.entityListView ? this.state.entityListView : <Text>'Loading...'</Text>}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});