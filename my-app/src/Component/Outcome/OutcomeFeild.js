import React from 'react'

const OutcomeField = (props) => {
    return (
        <div className="NotesWrap">
        <p>The Number?  </p>
           <textarea type="number" placeholder={props.number}></textarea>
  
   </div>
    )
}

export default OutcomeField;