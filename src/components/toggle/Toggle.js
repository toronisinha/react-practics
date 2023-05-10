import React, { useState } from 'react'

const Toggle = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <div>
            {/* use short circuit method jehetu p teg take amora show hide korbo 
            tai p er mordhe conditon dilam  */}
            {!toggle && (
                <p style={{ color: "red" }}>Click Show Display the Value</p>
            )}
            {toggle && (
                <p>we are useing toggle for hide and show</p>
            )}
            <button onClick={() => { setToggle(!toggle); }}>
                {toggle ? "Hide" : "Show"}</button>
        </div>
    )
}

export default Toggle;