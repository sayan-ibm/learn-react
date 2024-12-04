import React, { useRef, useState } from 'react'

const Text = () => {
    const [textVal, setTextVal] = useState("");
    const inputRef = useRef();

    function changeHandler(event){
        event.preventDefault();
        let textContent = event.target[0].value;
        console.log(textContent)
        setTextVal(textContent);
        inputRef.current.value = '';
    }
    function inputHandler(event){
        console.log(event);
    }
  return (
    <div>
        <form action="#" onSubmit={changeHandler}>
            <label htmlFor="inp">Search</label>
            <input type="text" name="inp" id="inp" ref={inputRef}/>
        </form>
        <div className="text-content">
            {textVal}
        </div>
    </div>
  )
}

export default Text

