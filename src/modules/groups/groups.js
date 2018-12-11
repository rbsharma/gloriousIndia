import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import GroupsHeader from './groups-header';
import GroupCard from '../group/group-card';
import { StubGroupsData, GroupsModel } from '../../models/groups-model';
import globalStyles from '../../styles/app-style';
export default class GroupsComponent extends React.Component {
    static navigationOptions = {
        headerStyle: globalStyles.header,
        headerTitleStyle: globalStyles.headerTitle,
        title: 'GLORIOUS INDIA'
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
                //let _cardStyle = 0;
                let _cardColor = '';
                let _cardColorLeft = '';
                switch (key % 3) {
                    case 0: _cardColor = globalStyles.bgBlue; _cardColorLeft = globalStyles.bgDarkBlue; break;
                    case 1: _cardColor = globalStyles.bgPink; _cardColorLeft = globalStyles.bgDarkPink; break;
                    case 2: _cardColor = globalStyles.bgGreen; _cardColorLeft = globalStyles.bgDarkGreen; break;
                    default: break;
                }
                return (
                    <TouchableOpacity activeOpacity={0.8} key={key}
                        style={[styles.groupCard, _cardColor]}
                        onPress={() => {
                            this.props.navigation.navigate('group',
                                { groupData: val, title: val.title, colorTheme: _cardColor.backgroundColor })
                        }}>
                        <GroupCard keyval={key} val={val} />
                        <View style={[styles.groupCardLeft, _cardColorLeft]}></View>
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
                    <View style={globalStyles.descriptionContainer}>
                        <GroupsHeader val={this.state.groupsData} />
                    </View>
                    <View style={styles.groupsContainer}>
                        {this.state.groupsListView ? this.state.groupsListView : <Text>'Loading...'</Text>}
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
    groupsContainer: {
        padding: 20,
    },
    groupCard: {
        marginTop: 30,
        elevation: 10,
        borderRadius: 10,
        //borderBottomLeftRadius: 10,
        //borderBottomRightRadius:10,
        padding: 10,
        height: 'auto',
        minHeight: 200,
    },
    groupCardLeft: {
        position: 'absolute',
        left: 0,
        elevation: 10,
        height: 'auto',
        minHeight: 200,
        width: 15,
    },
});

