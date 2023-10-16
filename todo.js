const fs = require('fs');
// const { normalize } = require('path');

class TodoList {
  constructor() {
    this.todos = [];
    this.ReadTodos();
  }

  ReadTodos() {
    try {
      const data = fs.readFileSync('Todo.json', 'utf8');
      this.todos = JSON.parse(data);
    } catch (err) {
      console.log('Error loading:', err.message);
    }
  }

  SaveTodo() {
    try {
      fs.writeFileSync('Todo.json', JSON.stringify(this.todos, null, 2), 'utf8');
    } catch (err) {
      console.log('Error from  saving Task :', err.message);
    }
  }

  AddTodo(Task) {
    const todo = {
      id: Math.ceil(Math.random() * 1000),
      Task
    };
    this.todos.push(todo);
    this.SaveTodo();
    console.log('####');
    console.log('Task is being Added !');
    console.log('-------------------------');
  }

  UpdateTodo(id, Task) {
    const todo = this.todos.find((a) => a.id === id);
    if (todo) {
      todo.Task = Task;
      this.SaveTodo();
      console.log('####');
      console.log('Task is being Updated !');
      console.log('-------------------------');
    } else {
      console.log('Task not found!');
    }
  }



  DeleteTodo(id) {
    const index = this.todos.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.SaveTodo();
      console.log('####');
      console.log('Task is being Deleted!');
      console.log('----------------------');
    } else {
      console.log('Task not found!');
    }
  }

  Display() {
    if (this.todos.length === 0) {
      console.log('Task Not found!');
    } else {
      console.log('All Tasks');
      this.todos.forEach((todo) => {
        console.log(`Task ID: ${todo.id}`);
        console.log(`Task: ${todo.Task}`);
        console.log('####');
      });
      console.log('-------------------------');
    }
  }
}

module.exports = TodoList;
