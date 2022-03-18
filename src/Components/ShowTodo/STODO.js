import React from 'react';
import './STODO.css'

const STODO = (props) => {
    const{id,title}=props.todo;
    return (
        <div className='todo-container'>
            <h2>USerID:{id}</h2>
            <p><small>Title:</small>{title}</p>
        </div>
    );
};

export default STODO;