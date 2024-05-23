import React from 'react'

const InputSelect = (props) => {
  return (
    <div className="select">
        <select {...props}/> 
        {/* Just add <option> */}
    </div>
  )
}

export default InputSelect
