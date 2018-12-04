import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Images from "../utilities/images";
export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
    }

    // HandleListItemClick = () => {

    //     // console.log('List Item clicked');
    //     // console.log(this.props);
    //     //console.log(this.props.navigation);
    //     this.props.navigation.navigate('ListDetails', {
    //         val: this.props.val
    //     });
    // }

    render() {
        return (
            <View key={this.props.keyval} style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{this.props.val.name.toUpperCase()}</Text>
                        <Text style={styles.italicText}>{this.props.val.name.toUpperCase()}</Text>
                        <Text style={styles.descriptionText}>{this.props.val.description}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.circleImage} source={Images.face} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5986e',
        margin: 5,
        minHeight: 100
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 3,
        marginRight:20
    },
    imageContainer: {
        flex: 1,
    },
    titleText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    italicText: {
        fontSize: 12,
        color:'#fff',
        fontStyle: 'italic',
        marginBottom:10
    },
    descriptionText: {
        fontSize: 16,
        color: 'white',
    },
    circleImage: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
    }
});