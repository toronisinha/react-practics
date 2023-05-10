import React from 'react'

const Child = (props) => {
    const childData = "i am from child to perent";
    props.onChildData(childData);
    return (
        <div>i can't show hendler variable value</div>
    )
}

export default Child;
