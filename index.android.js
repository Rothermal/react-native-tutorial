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
            <View>
            <View style={{ width: 155, height: 70, backgroundColor:'powderblue'}}>
            <Text>YAo</Text>
            <View style={{width: 125, height: 25, backgroundColor:'red'}}/>
            </View>
            <View style={{ width: 100, height: 100, backgroundColor:'skyblue'}}/>
            <View style={{ width: 150, height: 150, backgroundColor:'steelblue'}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('TakeTwo', () => FixedDimensionsBasics);
