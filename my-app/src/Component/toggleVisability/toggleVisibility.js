import React from 'react'

const ToggleVisibilityBtn = ({toggleVisibility, isVisible, count, setCount}) => {

    

    return (
        <div>
            <button onClick={toggleVisibility}>


{isVisible ? "Hide number" : "Show number"}
</button>
{isVisible && (
        <input
          type="number"
          name="clicks"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
)}
        </div>


    )
}

export default ToggleVisibilityBtn;