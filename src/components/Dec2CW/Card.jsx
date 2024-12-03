import React from 'react'
import "./Card.css"

function Card() {
    let cards = [
        {
            id: 1,
            name: "Product 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, laborum!"
        },
        {
            id: 2,
            name: "Product 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, laborum!"
        },
        {
            id: 3,
            name: "Product 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, laborum!"
        }
    ];
  return (
    <div className='cards-container'>
        {
            cards.map((card) => (
                <div className='card-container'>
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                    <button>Buy Now</button>
                </div>
            ))
        }
    </div>
    
  )
}

export default Card