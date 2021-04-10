import React from 'react'

const RemoveValue = ({decrementCount}) => {
    return (
        <div>
        <button onClick={decrementCount}>Click to decrease by 1</button>
    </div>

    )

}



export default RemoveValue;