import React, { useEffect, useState } from 'react';
import STODO from '../ShowTodo/STODO';
import './Todo.css'
const Todo = () => {
    const [todos,setTodo]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then(data=>setTodo(data))
    },[])
    return (
        <div>
            <h1>This is TODO list</h1>
            <p>Length:{todos.length}</p>
            <div className='todos'>
                {
                    todos.map(todo=>console.log(todo))
                }
                {
                    todos.map(todo=><STODO key={todo.id} todo={todo}></STODO>)
                }
            </div>
        </div>
    );
};

export default Todo;