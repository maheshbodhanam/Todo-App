import React from "react";
import "./App.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';


const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");


  const emailInputRef = React.useRef(null);

  React.useEffect(()=>{
    emailInputRef.current.focus();
  }, []);

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);




  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

 

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div className="card">
        
      
      <form onSubmit={handleSubmit}>
        <input ref={emailInputRef}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />&nbsp;&nbsp;
        <button type="submit">submit</button>
      </form>
      <h3>Todo List</h3>

     
      <div className="todo-actions">
          
         <div> 
        

              {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
          <table>
            <tr >
              <div className="inside">
              {todo.id === todoEditing ? (
              <input ref={emailInputRef}
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
             <div className="text"> {todo.text} </div>
              
            )}
            </div>
          
          
          <div className="todo-actions">
          <input className="checkbox"
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
          <div className="actions">
            {todo.id === todoEditing ? (
              <button className="button" onClick={() => submitEdits(todo.id)}><DoneOutlinedIcon/></button>
            ) : (
              <button className="button" onClick={() => setTodoEditing(todo.id)}><EditOutlinedIcon /></button>
            )}

            <button className="button" onClick={() => deleteTodo(todo.id)}><DeleteIcon/></button>
            </div>
          </div>
          
          </tr>

</table>

          </div>
          </div>
                ))}

         
        </div>

      
      </div>
     
      </div>
  
  );
};

export default App;