/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import{ AppRegistry, View, Text } from'react-native';

class FixedDimensionsBasics extends Component {
    render() {
        return(
            <View style={{flex:1}}>
            <View style={{ flex:1, backgroundColor:'powderblue'}}>
            <Text>YAo</Text>
            <View style={{flex:1, backgroundColor:'red'}}/>
            </View>
            <View style={{ flex:2, backgroundColor:'skyblue'}}/>
            <View style={{ flex:3, backgroundColor:'steelblue'}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('TakeTwo', () => FixedDimensionsBasics);
