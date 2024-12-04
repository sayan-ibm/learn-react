import React, { useState } from 'react'
import './Counter.css'
import Button from '../Buttons/Button';


const Counter = () => {
    const [count, setCount] = useState(0);
    function add() {
        console.log("add called");
        console.log(count);
        
       return setCount(count+1  );
    }
    function sub(){
        console.log("sub called");
        console.log(count-1);
        
        return setCount(count-1);
    }  

  return (
    <div className='counter-container'>
        <div className={`number ${count > 2 ? "bg" : ""}`} 
        style={count > 0 ? {color: 'green'} : count == 0 ? {color: 'black'}: {color: 'red'}}>{count}</div>
        <div className="buttons">
            {/* <button onClick={sub}>-</button>
            <button onClick={add}>+</button> */}
            <Button icon={"-"} handlingFunc={sub}/>
            <Button icon={"+"} handlingFunc={add}/>
        </div>
    </div>
  )
}

export default Counter