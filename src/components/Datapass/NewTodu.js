import React, { useState } from 'react'

const NewTodu = (props) => {
    //jodi amora kono value ke input theke dhorte cai tahole obossoi amarder useState use korbo
    const [todo, setTodo] = useState("  ");

    //event er mardhome value gulo dhorte pari input file thake
    const hendleInputChange = (event) => {
        setTodo(event.target.value);
    }


    //in this method pass child value to perent
    const hendleTodo = (evant) => {
        evant.preventDefault();
        const newTodo = { id: new Date().getTime().toString(), name: todo };
        props.onTodo(newTodo);
        setTodo("");

    }

    return (
        <form onSubmit={hendleTodo}>
            <label>New Todo:</label>
            <input type='text'
                name='todo'
                value={todo}
                onChange={hendleInputChange}
            />
            <button>Add todo</button>
        </form>
    )
}

export default NewTodu