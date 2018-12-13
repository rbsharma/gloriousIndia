import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Images from "../../utilities/images";

export default class EntityCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container} key={this.props.keyval}>
                <View style={styles.cardLeft}>
                    <Text style={styles.descriptionText}>{this.props.val.title}</Text>
                </View>
                <View style={styles.cardRight}>
                    <Image style={styles.circleImage} source={{uri : this.props.val.imageUrl}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        padding: 15,
        fontSize: 25,
        color: '#fff',
        fontWeight: '700',
    },
    cardLeft: {
        position: 'absolute',
        left: 0,
        height: 'auto',
        width: '70%',
    },
    cardRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '70%',
        height: 'auto',
        minHeight: 100,
        width: '30%',
    },
    circleImage: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
    },
});