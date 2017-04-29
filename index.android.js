/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import{ AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};


        // toggle the state every second
        setInterval(() => {
        this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render(){
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View>
            <Blink text='I love to blink'/>
            <Blink text='Yes Blinking is sooo Great!'/>
            <Blink text='Why did they ever take this out of html'/>
            <Blink text='this is what makes MySpace the best'/>
            </View>
        );
    }
}


AppRegistry.registerComponent('TakeTwo', () => BlinkApp);
