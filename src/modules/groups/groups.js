import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import GroupsHeader from './groups-header';
import GroupCard from '../group/group-card';
import { StubGroupsData, GroupsModel } from '../../models/groups-model';
import globalStyles from '../../styles/app-style';
export default class GroupsComponent extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#e7b576',
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 26,
            marginTop: 5,
            color: 'white',
            elevation: 10,
        },
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
                    case 0: _cardColor = globalStyles.blueBg; _cardColorLeft = globalStyles.darkBlueBg; break;
                    case 1: _cardColor = globalStyles.pinkBg; _cardColorLeft = globalStyles.darkPinkBg; break;
                    case 2: _cardColor = globalStyles.greenBg; _cardColorLeft = globalStyles.darkGreenBg; break;
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
                    <View style={styles.descriptionContainer}>
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
    descriptionContainer: {
        //flex: 1,
        //flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
        // margin: 10,
        // paddingLeft: 10,
        // paddingRight: 10,
        elevation: 10,
        //borderRadius: 0,
        padding: 10,
        marginBottom: 5,
        //borderTopWidth: 10,
        //borderRightWidth: 15,
        //borderLeftWidth: 15,
        //borderBottomWidth: 15,
        borderColor: '#e4932d',
        backgroundColor: '#e7b576',
        height: 'auto',
        minHeight: 200,
        //borderBottom:20,
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

