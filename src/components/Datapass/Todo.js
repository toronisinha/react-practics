import React from 'react'

const Todo = ({ todo, hendleDeleteTodo }) => {
    const { id, name } = todo;

    const hendleDelete = (id) => {
        hendleDeleteTodo(id);
    }
    return (
        <article className='todo'>
            <p>{name}</p>
            <button onClick={() => { hendleDelete(id) }}>Delete</button>
        </article>
    )
}

export default Todo