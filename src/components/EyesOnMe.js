// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {

    function haveAttention() {
        console.log("Good!")
    }

    function wantAttention() {
        console.log("Hey! Eyes on me!")
    }

  return (
    <div>
        <button onFocus={haveAttention} onBlur={wantAttention}>
            Eyes on me
        </button>
    </div>
  )
}

export default EyesOnMe