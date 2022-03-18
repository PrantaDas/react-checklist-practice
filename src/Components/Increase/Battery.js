import React, { useState } from 'react';
import './Battery.css'
const Battery = () => {
    const [value,setValue]=useState(100);
    const decreaseValue=()=>{
        if(value>0){
            setValue(value-10)
        }
        
    }
    return (
        <div className='container'>
            <h1>Battery: <span>{value}%</span></h1>
            <button onClick={decreaseValue}>-</button>
        </div>
    );
};

export default Battery;