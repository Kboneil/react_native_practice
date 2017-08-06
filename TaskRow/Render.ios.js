import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import Swipeout from 'react-native-swipe-out';


export default function render(baseStyles) {

    const buttons = [
        {
            text: 'Done',
            backgroundColor: '#05A5D1',
            underlayColor: '#273539',
            onPres: this.onDonePressed.bind(this)
        }
    ]


    return (
        <View
            style={localStyles.constainer}
        >
            <Swipeout
                backgroundColor="#fff"
                right={buttons}
            >
                <View style={[baseStyles.container, localStyles.row]}>
                    <Text
                        style={baseStyles.label}
                    >{this.props.todo.task}</Text>
                </View>
            </Swipeout>
        </View>
    );
}

const localStyles = StyleSheet.create({
  row: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  constainer: {
      marginBottom: 20,
  }
});
