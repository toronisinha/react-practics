import React, { useState } from 'react'

import Todus from './Todus';
import NewTodu from './NewTodu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const oldtodos = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" }
];
const Home = () => {
    const [todos, setTodu] = useState(oldtodos);

    //er method er mardhome amora chaild theke value niya asi
    const hendleTodoNew = (newTodo) => {
        setTodu([...todos, newTodo]);
        toast("New Todo is added");
    }


    const hendleDeleteTodo = (id) => {
        const deleteTodo = todos.filter(todos => todos.id !== id)
        setTodu(deleteTodo);
        toast(" Todo is Deleted");
    }
    return (
        <div className='block_container3'>
            <h4>state lifting principle</h4><hr />
            <NewTodu onTodo={hendleTodoNew} /><br />
            <ToastContainer />
            <Todus todos={todos} hendleDeleteTodo={hendleDeleteTodo} />
        </div>
    )

}
export default Home