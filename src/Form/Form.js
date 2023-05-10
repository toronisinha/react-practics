import React, { useState } from 'react'

export default function Form() {


    //object use kore ei code guloke koto choto kora jay dekhun......

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [user, setUser] = useState({ name: '', email: '', password: '' });
    //constructor kore nibo age user theke
    const { name, email, password } = user
    // const onNameChange = (e) => {
    //     setName(e.target.value)
    // }
    // const onEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }
    // const onPasswoordChange = (e) => {
    //     setPassword(e.target.value)
    // }
    const commonHeandler = (e) => {
        //where use sperate oparator
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const hendleSubmit = (e) => {

        console.log(user);
        // etar mane holo load hoyer sathe sathe reload hobe na
        e.preventDefault();
        setUser({ name: '', email: '', password: '' });
    }
    return (
        <div className='bgColor'>
            <h2>Registration Form</h2>
            <form action="" onSubmit={hendleSubmit}>
                <div className='formStyle'>
                    <label>Name: </label>
                    <input type='text' name='name' onChange={commonHeandler} />
                </div>
                <div className='formStyle'>
                    <label>Email: </label>
                    <input type='email' name='email' onChange={commonHeandler} />
                </div>
                <div className='formStyle'>
                    <label>Password: </label>
                    <input type='password' name='password' onChange={commonHeandler} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
