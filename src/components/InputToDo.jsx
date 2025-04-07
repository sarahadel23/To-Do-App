import React from 'react'

function InputToDo() {
  return (
    <div className='inputto'>
        <input
            placeholder="Type something here...."
            className="input"
            name="text"
            type="text"
        />
        
        <button className="animated-button">Add</button>

    </div>
  )
}

export default InputToDo