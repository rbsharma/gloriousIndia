import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Linking, Button,StatusBar } from 'react-native';
import globalStyles from '../../styles/app-style';
import EntityDetailedView from './entity-detailed';
import { EntityModel } from '../../models/groups-model';
const win = Dimensions.get('window');

export default class EntityComponent extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: navigation.state.params.colorTheme,
        },
        headerTitleStyle: globalStyles.headerTitle,
        title: `${navigation.state.params.title.toUpperCase()}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            colorTheme: null,
            isEntityDataFetched: false,
            entityData: new EntityModel(),
            entityQuoteView: null,
            entityOrganizationView: null,
        }
        this.params = this.props.navigation.state.params;
        // console.log(this.params);
        // console.log(this.state);
    }

    componentDidMount() {
        if (this.params.entityData != null) {
            this.setState({ colorTheme: this.params.colorTheme, entityData: this.params.entityData, isEntityDataFetched: true }, () => {
                console.log(this.state);
                this.CreateSubView();
            });
        }
    }

    CreateSubView() {
        //organization list
        let _organizationsView = this.state.entityData.organizations.map((organizationString, key) => {
            return (
                <View style={styles.elevatedContainer} key={organizationString.slice(-5)}>
                    <Text style={[styles.quoteText]}>
                        {organizationString.toUpperCase()}{"\n"}
                    </Text>
                </View>
            )
        });

        //quote list
        let _quotesView = this.state.entityData.quotes.map((quoteString, key) => {
            return (
                <View style={styles.elevatedContainer} key={quoteString.slice(-5)}>
                    <Text style={[styles.quoteText, globalStyles.italic]}>
                        {quoteString}{"\n"}
                    </Text>
                </View>
            )
        });
        this.setState({ entityOrganizationView: _organizationsView, entityQuoteView: _quotesView });
    }

    render() {
        return (
            <View style={styles.container} key={this.props.keyval}>
                <StatusBar
                    backgroundColor={this.state.colorTheme}
                    barStyle="light-content" animated
                    showHideTransition="slide"
                />
                <ScrollView>
                    <View>
                        {/* IMAGE */}
                        <View style={styles.fixedImageContainer}>
                            <Image
                                style={styles.descriptionImage}
                                source={{ uri: this.props.navigation.state.params.entityData.imageUrl }} />
                        </View>
                        <View style={styles.hoverContainer}>
                            {/* TITLE */}
                            <View>
                                <Text style={[styles.descriptionText]}>
                                    {this.state.entityData.title.toUpperCase()}{"\n"}
                                    <Text style={styles.aliasText}>
                                        ({this.state.entityData.alias}){"\n"}{"\n"}
                                    </Text>
                                </Text>
                            </View>
                            {/* BIOMETRIC */}
                            <View>
                                <Text style={[styles.keyText]}>
                                    BORN : {this.state.entityData.dob.toUpperCase()}{"\n"}
                                </Text>
                                <Text style={[styles.keyText]}>
                                    DIED : {this.state.entityData.dod.toUpperCase()}{"\n"}
                                </Text>
                                <Text style={[styles.keyText]}>
                                    MOVEMENT : {this.state.entityData.movement.toUpperCase()}{"\n"}
                                </Text>
                            </View>
                            {/* DESCRIPTION */}
                            <View>
                                <Text style={[styles.valueText]}>
                                    {"\n"}{this.state.entityData.description}{"\n"}
                                </Text>
                            </View>
                            {/* ORGANIZATIONS */}
                            <View style={[globalStyles.mt20]}>
                                <View>
                                    <Button onPress={() => { }}
                                        color={this.props.navigation.state.params.colorTheme}
                                        title="ORGANIZATIONS" />
                                </View>
                                {this.state.entityOrganizationView}
                            </View>
                            {/* QUOTES */}
                            <View style={[globalStyles.mt20]}>
                                <Button onPress={() => { }}
                                    color={this.props.navigation.state.params.colorTheme}
                                    title="NOTABLE QUOTES" />
                                {this.state.entityQuoteView}
                            </View>
                        </View>
                    </View>
                    {/* READ MORE */}
                    <Button onPress={() => Linking.openURL(this.state.entityData.readMoreUrl)}
                        style={{ height: 200 }}
                        color={this.props.navigation.state.params.colorTheme}
                        title={"READ MORE ABOUT " + this.state.entityData.title.toUpperCase()} />
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: win.width,
    },
    container: {
        flex: 1,
    },
    fixedImageContainer: {
        //position: 'absolute',
    },
    hoverContainer: {
        padding: 10
        //marginTop: 400
    },
    imageContainer: {
        //width: '100%',
    },
    descriptionImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: 400,
    },
    descriptionText: {
        //padding: 10,
        fontSize: 30,
        color: '#000',
        fontWeight: '700',
        //textDecorationLine: 'underline',
    },
    aliasText: {
        //padding: 10,
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
        fontStyle: 'italic',
        right: 0
    },
    keyText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
    },
    valueText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
    },
    quoteText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
    },
    elevatedContainer: {
        height: 'auto',
        padding: 10,
        marginTop: 0,
        elevation: 10,
        backgroundColor: '#F5FCFF',
        //borderRadius: 10,
        //borderBottomLeftRadius: 10,
        //borderBottomRightRadius:10,
    },
});