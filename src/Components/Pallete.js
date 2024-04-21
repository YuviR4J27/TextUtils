import React, { useState } from 'react'
// import { useState } from 'react'

export default function Pallete() {
    const [col, setcol] = useState(null)

    let setCol = (color)=>{
        
    }
  return (
    <div className='pallete'>
        <button className="p-btn green"></button>
        <button className="p-btn blue"></button>
        <button className="p-btn red"></button>
        {/* <button className="p-btn yellow"></button> */}
    </div>
  )
}
