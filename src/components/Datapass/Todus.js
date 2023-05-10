import React from 'react'
import Todo from './Todo'

const Todus = ({ todos, hendleDeleteTodo }) => {
    //props er mardhome onek value ase seguloke ekhane maping kore nichi
    // const alltodo = props.todos.map((tudo, index) => (<p key={index}>{tudo}</p>))
    return (
        <section className='todos'>
            {todos.map((todo) => <Todo ke={todo.id} todo={todo} hendleDeleteTodo={hendleDeleteTodo} />)}
        </section>
    )
}

export default Todus;