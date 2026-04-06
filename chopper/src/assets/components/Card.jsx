import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        {props.img && <img src={props.img} alt={props.title} width="100%" style={{border : "2px solid black"}} />}
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default Card