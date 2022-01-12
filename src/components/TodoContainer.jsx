import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodoList';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false
      }
    ]
  };

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }));
  };

  addTodoItem = title => {
    console.log(title);
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
