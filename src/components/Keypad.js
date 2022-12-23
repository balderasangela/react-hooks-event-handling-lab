// Code Keypad Component Here
import React from 'react'

function Keypad() {
    
   const need = () => {
console.log('Entering password...')
   };
   
  return (
    <div>
        <input type="password" onChange={need}/>
    </div>
  )
}

export default Keypad