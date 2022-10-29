import React from 'react'
import ReactDOM from 'react-dom'

const Card = (props) => {
    return (
      <div className="pa2 bg-light-green ma2 dib grow df">
        <img className="w5 h5" src={props.img} alt="meal" />
        <p>{props.name}</p>
        <p>{props.country}</p>
      </div>
    );
}

export default Card;