import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';

export default function render(styles) {
  const doneAnimation = new Animated.ValueXY();

  const localStyles = StyleSheet.create({
    doneButton: {
      borderRadius: 5,
      padding: 5,
    },
    row: {
      transform: doneAnimation.getTranslateTransform()
    }
  });

  function animatedPress() {
    Animated.spring(doneAnimation, {
      tension: 2,
      friction:3,
      toValue: {
        x: -500,
        y: 0,
      }
    }).start()

    setTimeout(() => {
      this.onDonePressed();
    }, 1000)
  }

  return (
    <Animated.View style={[styles.container, localStyles.row]}>
      <Text
        style={styles.label}
      >{this.props.todo.task}</Text>
      <TouchableHighlight
        onPress={animatedPress.bind(this)}
        style={localStyles.doneButton}
        underlayColor="#fff"
      >
        <Image
          source={require('../images/done.png')}
        />
      </TouchableHighlight>
    </Animated.View>
  );
}
