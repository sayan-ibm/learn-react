import React, { useState } from 'react'
import "./SearchFilter.css"

const SearchFilter = () => {
    const items = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
    const [fruits, setFruits] = useState(items)

    function changeHandler(event){
        let inpValue = event.target.value;
        if(inpValue === '') setFruits(items);
        console.log(event.target.value);

        setFruits(items.filter((fruit) => fruit.toLowerCase().includes(inpValue)));
        console.log(fruits);
    }
  return (
    <div className='list-container'>
        <form action="#">
            <label htmlFor="inp">Search</label>
            <input type="text" name="inp" id="inp" onChange={changeHandler}/>
        </form>
        <ul>
            {
                fruits.map((fruit, idx) => (
                    <li key={idx}>{fruit}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default SearchFilter