import React from 'react'
import spinner from  '../components/assets/loading-gif-png-5.gif';

const Spinner = () => {
  return (
    <img src={spinner} alt='...loading' style={{
        width:"100px",
        margin:"auto",
        display:"block"
    }}/>
  )
}

export default Spinner