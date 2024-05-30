import {useState, useEffect} from 'react';
import TodoItem from './TodoItem';

function App() {
  // create a place to hold our todos
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // use the fetch API to make an AJAX request to the backend
    fetch('/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const onDeleteClick = (id) => {
    //make POST request to the backend
    fetch(`/todos/${id}/delete`, {method: 'POST' })
    .then((response) => {

      if(response.ok){

        const filteredTodos = todos.filter(todo => todo.id !== id);
        return setTodos(filteredTodos);
      }
           // if the response is not ok, something has gone wrong while trying to delete the todo
           throw new Error('Error deleting todo');
    })

  }

  const todoItemComponentsArr = todos.map((todo) => {
    return <TodoItem key={todo.id} task={todo.task} onDeleteClick={onDeleteClick} id={todo.id} />
  })


  return (
    <div className="App">
      <ul>
      {todoItemComponentsArr} 
      </ul>
    </div>
  );
}

export default App;

