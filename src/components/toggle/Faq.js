import React, { useState } from 'react'
import style from './Faq.module.css'

const Faq = ({ id, title, desc }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <article className={style.faq}>
            <div>
                <h5>{title}</h5>
                {/* etake anonumas function bola hoy */}
                <button style={{ padding: 10 }} onClick={() => { setToggle(!toggle) }}>
                    {toggle ? "-" : "+"}</button>

            </div>
            {toggle && (<p>{desc}</p>)}
        </article>
    )
}

export default Faq;