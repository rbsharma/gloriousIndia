import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

import GroupHeader from './group-header';
import EntityCard from '../entity/entity-card';
import { GroupModel } from '../../models/groups-model';
import globalStyles from '../../styles/app-style';

export default class GroupComponent extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: navigation.state.params.colorTheme,
        },
        headerTitleStyle: globalStyles.headerTitle,
        title: `${navigation.state.params.title}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            isGroupDataFetched: false,
            groupData: new GroupModel(),
            entityListView: null,
            colorTheme: null
        }
        this.params = this.props.navigation.state.params;
        console.log(this.params);
        //console.log(this.state);
    }

    componentDidMount() {
        if (this.params.groupData != null) {
            this.setState({
                groupData: this.params.groupData,
                isGroupDataFetched: true,
                colorTheme: this.props.navigation.state.params.colorTheme
            }, () => {
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
                        style={[styles.entityCard, { backgroundColor: this.state.colorTheme }]}
                        onPress={() => {
                            this.props.navigation.navigate('entity',
                                { entityData: val, title: val.title, colorTheme: this.state.colorTheme })
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
            <View style={styles.container}>
                <View>
                    <StatusBar
                        backgroundColor={this.state.colorTheme}
                        barStyle="default"
                        animated showHideTransition="slide"
                    />
                </View>
                <ScrollView>
                    <View style={[globalStyles.descriptionContainer,
                    { backgroundColor: this.state.colorTheme }]}>
                        <GroupHeader val={this.state.groupData} />
                    </View>
                    <View style={styles.entityContainer}>
                        {this.state.entityListView ? this.state.entityListView : <Text>'Loading...'</Text>}
                    </View>
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
    entityContainer: {
        padding: 20,
    },
    entityCard: {
        marginTop: 30,
        elevation: 10,
        //borderRadius: 10,
        //borderBottomLeftRadius: 10,
        //borderBottomRightRadius:10,
        padding: 10,
        height: 'auto',
        minHeight: 100,
    },
});