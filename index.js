

const readline = require('readline');
const TodoList = require('./todo');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todoList = new TodoList();

function displayMenu() {
  console.log('####################################');
  console.log('Todo List');
  console.log('Add list (add)');
  console.log('Update list (update)');
  console.log('Delete list (delete)');
  console.log('Display all list (display)');
  console.log('####################################');
} 
displayMenu();
function promptUser() {
 
  rl.question('Enter your Action: ', (choice) => {
    switch (choice) {
      case 'add':
        rl.question('Add the Task: ', (Task) => {
                if (Task.trim() === '') {
                  console.log('Todo Task cannot be empty!');
                  
                }    else{
                    todoList.AddTodo(Task);

                }
         
          
          rl.close();
          
      });
        break;
      case 'update':
        todoList.Display();
        rl.question('Enter the Task ID you want to  update: ', (id) => {
          rl.question('Update the Task: ', (Task) => {
            todoList.UpdateTodo(parseInt(id), Task);
            rl.close();
          });
        });
        break;
      case 'delete':
        rl.question('Enter the Task ID you want to delete: ', (id) => {
          todoList.DeleteTodo(parseInt(id)); 
          rl.close();
        });
        break;
      case 'display':
        todoList.Display();
        rl.close();
        break;
       
      default:
        console.log('Unknown Action Please try again.');
        rl.close();
        break;
         
    }

  });
}
 
promptUser();
