import React, { useState } from 'react';
import "./HideButton.css";

const HideButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    function clickHandler() {
        setIsVisible(!isVisible); 
    }

    function handleDivClick() {
        if(!isVisible) setIsVisible(!isVisible); 
    }

    return (
        <div className='button-container' onClick={handleDivClick}>
            {isVisible && (
                <button onClick={clickHandler} className="hide-button">Hide</button>
            )}
        </div>
    );
}

export default HideButton;
