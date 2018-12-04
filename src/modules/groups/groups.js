import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import GroupsHeader from './groups-header';
import GroupCard from '../group/group-card';
import { StubGroupsData, GroupsModel } from '../../models/groups-model';

export default class GroupsComponent extends React.Component {
    static navigationOptions = {
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
        title: 'APPLICATION NAME'
    };

    constructor(props) {
        super(props);
        this.state = {
            isGroupsDataFetched: false,
            groupsData: new GroupsModel(),
            groupsListView: null,
            groups: [
                { title: 'GROUP A', route: 'group' },
                { title: 'GROUP B', route: 'group' }]
        }
    }

    componentDidMount() {
        let _stubGroupsData = new StubGroupsData();
        let _groupsData = _stubGroupsData.getGroupsModel();
        if (_groupsData.title) {
            this.setState({ groupsData: _groupsData, isGroupsDataFetched: true }, () => {
                this.CreateGroupListView();
                console.log(this.state.groupsData);
            });
        }
    }

    CreateGroupListView() {
        if (this.state.isGroupsDataFetched) {
            let _groupsListView = this.state.groupsData.groups.map((val, key) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} key={key}
                        onPress={() => {
                            this.props.navigation.navigate('group',
                                { groupData: val, title: val.title })
                        }}>
                        <GroupCard keyval={key} val={val} />
                    </TouchableOpacity>
                )
            });
            this.setState({ groupsListView: _groupsListView });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <GroupsHeader val={this.state.groupsData} />
                    </View>
                    {this.state.groupsListView ? this.state.groupsListView : <Text>'Loading...'</Text>}
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
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 2,
        borderRadius: 0,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: '#e2804a',
        backgroundColor: '#e2804a',
        height: 'auto',
    },
    descriptionText: {
        padding: 5,
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
    },
});

