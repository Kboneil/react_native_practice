import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import store from './todoStore';

class LearnReact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState());
    });
  };

  onAddStarted() {
    this.nav.push({
      name: 'taskform',
    });
  }

  onCancel() {
    this.nav.pop();
  }

  onAdd(task) {
    // this.state.todos.push({ task: task });
    // this.setState({ todos: this.state.todos });
    store.dispatch({
      type: 'ADD_TODO',
      task,
    });
    this.nav.pop();
  }

  onDone(todo) {
    console.log('complete', todo.task);
    const filteredTodos =
      this.state.todos.filter((filterTodo) => {
        return filterTodo !== todo;
      });
    this.setState({ todos: filteredTodos });
  }

  renderScene(route, nav) {
    switch (nav.name){
      case 'taskform':
        return (
          <TaskForm
            onCancel={this.onCancel.bind(this)}
            onAdd={this.onAdd.bind(this)}
          />
        );
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'tasklist', index: 0 }}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this, 'hello')}
    />
    );
  }
}

const styles = StyleSheet.create({

});

export default LearnReact;
